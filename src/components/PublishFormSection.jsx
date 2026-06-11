import styles from './PublishFormSection.module.css'
import { useState } from 'react'
import { Link } from 'react-router'

const API_URL = 'https://dev-jobs-api-sepia.vercel.app/jobs'

const initialForm = {
    titulo: '',
    empresa: '',
    ubicacion: '',
    descripcion: '',
    technology: '',
    modalidad: '',
    nivel: ''
}

export function PublishFormSection(){
    const [form, setForm] = useState(initialForm)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)

    const handleChange = (event)=>{
        const {name, value} = event.target
        setForm((prev)=>({...prev, [name]: value}))
    }

    const handleSubmit = async(event)=>{
        event.preventDefault()
        setLoading(true)
        setError(null)

        const {titulo, empresa, ubicacion, descripcion, technology, modalidad, nivel} = form

        const body = {
            titulo,
            empresa, 
            ubicacion,
            ...(descripcion && {descripcion}),
            data: {technology, modalidad, nivel}
        }

        try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })

      if (!res.ok) {
        const data = await res.json().catch(() => null)
        const message = data?.message || data?.error || 'No se pudo publicar el empleo'
        const issues = data?.issues || data?.errors || data?.details
        setError({ message, issues })
        return
      }

      setSuccess(true)
    } catch (err) {
      setError({ message: err.message || 'Error de red' })
    } finally {
      setLoading(false)
    }
  }

  const handlePublishAnother = () => {
    setForm(initialForm)
    setError(null)
    setSuccess(false)
  }

  if (success) {
    return (
      <section className={styles.successContainer}>
        <h2>¡Empleo publicado con éxito!</h2>
        <p>Tu oferta ya está disponible en el listado.</p>
        <div className={styles.successActions}>
          <Link to='/search' className={styles.linkButton}>Ver listado de empleos</Link>
          <button onClick={handlePublishAnother}>Publicar otro</button>
        </div>
      </section>
    )



    }

    return(
    <section className={styles.container}>
            <h1>Publicar un empleo</h1>
      <p>Completá el formulario para publicar una nueva oferta.</p>
      <form onSubmit={handleSubmit} className={styles.form}>

        <div className={styles.field}>
          <label htmlFor='titulo'>Título del empleo</label>
          <input
            id='titulo'
            name='titulo'
            type='text'
            required
            minLength={3}
            maxLength={100}
            value={form.titulo}
            onChange={handleChange}
            disabled={loading}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor='empresa'>Empresa</label>
          <input
            id='empresa'
            name='empresa'
            type='text'
            required
            minLength={3}
            maxLength={100}
            value={form.empresa}
            onChange={handleChange}
            disabled={loading}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor='ubicacion'>Ubicación</label>
          <input
            id='ubicacion'
            name='ubicacion'
            type='text'
            required
            value={form.ubicacion}
            onChange={handleChange}
            disabled={loading}
            placeholder='Ej: remoto, cdmx, barcelona'
          />
        </div>

        <div className={styles.field}>
          <label htmlFor='descripcion'>Descripción</label>
          <textarea
            id='descripcion'
            name='descripcion'
            value={form.descripcion}
            onChange={handleChange}
            disabled={loading}
            rows={5}
            placeholder='Opcional'
          />
        </div>

        <div className={styles.filtersRow}>
          <div className={styles.field}>
            <label htmlFor='technology'>Tecnología</label>
            <select
              id='technology'
              name='technology'
              required
              value={form.technology}
              onChange={handleChange}
              disabled={loading}
            >
              <option value=''>Elegir tecnología</option>
              <option value='javascript'>JavaScript</option>
              <option value='python'>Python</option>
              <option value='react'>React</option>
              <option value='nodejs'>Node.js</option>
              <option value='java'>Java</option>
              <option value='csharp'>C#</option>
              <option value='c'>C</option>
              <option value='c++'>C++</option>
              <option value='ruby'>Ruby</option>
              <option value='php'>PHP</option>
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor='modalidad'>Modalidad</label>
            <select
              id='modalidad'
              name='modalidad'
              required
              value={form.modalidad}
              onChange={handleChange}
              disabled={loading}
            >
              <option value=''>Elegir modalidad</option>
              <option value='remoto'>Remoto</option>
              <option value='cdmx'>Ciudad de México</option>
              <option value='guadalajara'>Guadalajara</option>
              <option value='monterrey'>Monterrey</option>
              <option value='barcelona'>Barcelona</option>
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor='nivel'>Nivel de experiencia</label>
            <select
              id='nivel'
              name='nivel'
              required
              value={form.nivel}
              onChange={handleChange}
              disabled={loading}
            >
              <option value=''>Elegir nivel</option>
              <option value='junior'>Junior</option>
              <option value='mid'>Mid-level</option>
              <option value='senior'>Senior</option>
              <option value='lead'>Lead</option>
            </select>
          </div>
        </div>

        {error && (
          <div className={styles.errorBox} role='alert'>
            <strong>{error.message}</strong>
            {error.issues?.length > 0 && (
              <ul>
                {error.issues.map((issue, index) => (
                  <li key={index}>
                    {issue.path?.length ? `${issue.path.join('.')}: ` : ''}
                    {issue.message}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        <div className={styles.actions}>
          <Link to='/' className={styles.linkButton}>Cancelar</Link>
          <button type='submit' disabled={loading}>
            {loading ? 'Publicando...' : 'Publicar empleo'}
          </button>
        </div>

      </form>
        </section>
    )
}