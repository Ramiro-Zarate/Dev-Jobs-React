import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import { JobForm } from '../components/JobForm'
import {
  fetchJobById,
  createLocalOverride,
  updateJob,
  useJobsStore
} from '../api/jobs'
import styles from './Edit.module.css'

export default function EditPage() {
  const { jobId } = useParams()
  const navigate = useNavigate()
  const [job, setJob] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const isLocalJob = useJobsStore((state) => state.isLocalJob(jobId))

  useEffect(() => {
    let cancelled = false

    async function loadJob() {
      try {
        const data = await fetchJobById(jobId)
        if (cancelled) return
        setJob(data)
      } catch (err) {
        if (cancelled) return
        setError(err.message)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    loadJob()
    return () => {
      cancelled = true
    }
  }, [jobId])

  const handleSubmit = async (formData) => {
    if (isLocalJob) {
      updateJob(jobId, formData)
    } else {
      createLocalOverride(job, formData)
    }
    navigate(`/search/${jobId}`)
  }

  if (loading) {
    return (
      <main>
        <title>Editar empleo - DevJobs</title>
        <section className={styles.statusContainer}>
          <p>Cargando empleo...</p>
        </section>
      </main>
    )
  }

  if (error || !job) {
    return (
      <main>
        <title>Empleo no encontrado - DevJobs</title>
        <section className={styles.statusContainer}>
          <h1>Empleo no encontrado</h1>
          <p>{error || 'El empleo que intentás editar no existe.'}</p>
          <button onClick={() => navigate('/search')}>
            Volver al listado
          </button>
        </section>
      </main>
    )
  }

  return (
    <main>
      <title>Editar {job.titulo} - DevJobs</title>
      <section className={styles.container}>
        <h1>Editar empleo</h1>
        <p>Modificá los datos de la oferta.</p>
        <JobForm
          initialValues={job}
          onSubmit={handleSubmit}
          submitLabel='Guardar cambios'
          cancelTo={`/search/${jobId}`}
        />
      </section>
    </main>
  )
}
