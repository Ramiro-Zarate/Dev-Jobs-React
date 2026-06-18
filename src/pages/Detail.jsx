import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router"
import { JobDetailCard } from "../components/JobDetailCard"
import { fetchJobById, deleteJob } from "../api/jobs"


export default function JobDetail () {
    const {jobId} = useParams()
    const navigate = useNavigate()

    const [job, setJob] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        let cancelled = false

        fetchJobById(jobId)
            .then(data => {
                if (cancelled) return
                setJob(data)
            })
            .catch(err => {
                if (cancelled) return
                setError(err.message)
            })
            .finally(()=>{
                if (!cancelled) setLoading(false)
            })

        return () => { cancelled = true }
    }, [jobId])

    const handleDelete = () => {
        deleteJob(jobId)
        navigate('/search')
    }

    if (loading) {
        return (
            <main>
                <title>Cargando - DevJobs</title>
                <p style={{ padding: '2rem', textAlign: 'center' }}>Cargando empleo...</p>
            </main>
        )
    }

    if (error || !job) {
        return(
            <main>
                <title>No encontrado - DevJobs</title>
                <section style={{ padding: '2rem', textAlign: 'center' }}>
                    <h1>Oferta no encontrada</h1>
                    <p>{error || 'El empleo que buscás no existe.'}</p>
                    <button
                        onClick={()=>navigate('/')}
                    >
                        Volver al Inicio
                    </button>
                </section>
            </main>
        )
    }

    return(
        <main>
            <title>{job.titulo} - DevJobs</title>
            <JobDetailCard job={job} onDelete={handleDelete}/>
        </main>
    )
}
