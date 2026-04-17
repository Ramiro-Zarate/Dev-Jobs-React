import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router"

export function Detail () {
    const {jobId} = useParams()
    const navigate = useNavigate()

    const [job, setJob] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        fetch(`https://jscamp-api.vercel.app/api/jobs/${jobId}`)
        .then(response =>{
            if (!response.ok) throw new Error('Job Not Found')
            return response.json()
        })
        .then(json=>{
            setJob(json)
        })
        .catch(err=>{
            setError(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    }, [jobId])

    if (loading) {
        return (
            <div>
                <h1>Cargando</h1> {/* Insertar estilos */}
            </div>
        )
    }

    if (error || !job) {
        return(
            <div>
                <h1>
                    Oferta no enctontrada
                </h1>
                <button 
                    onClick={()=>navigate('/')} 
                >
                    Volver al Inicio {/* Insertar estilos */}
                </button>
            </div>
        )
    }

    return(
        <>
            <h1>EL job id es {jobId}</h1>
        </>
    )
}