import { useState } from 'react'
import { Link } from 'react-router'
import styles from './PublishFormSection.module.css'
import { JobForm } from './JobForm'
import { createJob } from '../api/jobs'

export function PublishFormSection() {
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (formData) => {
    createJob(formData)
    setSuccess(true)
  }

  if (success) {
    return (
      <section className={styles.successContainer}>
        <h2>¡Empleo publicado con éxito!</h2>
        <p>Tu oferta ya está disponible en tu navegador.</p>
        <div className={styles.successActions}>
          <Link to='/search' className={styles.linkButton}>Ver listado de empleos</Link>
          <button onClick={() => setSuccess(false)}>Publicar otro</button>
        </div>
      </section>
    )
  }

  return (
    <section className={styles.container}>
      <h1>Publicar un empleo</h1>
      <p>Completá el formulario para publicar una nueva oferta.</p>
      <JobForm
        onSubmit={handleSubmit}
        submitLabel='Publicar empleo'
        cancelTo='/'
      />
    </section>
  )
}
