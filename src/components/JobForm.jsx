import styles from './JobForm.module.css'
import { Link } from 'react-router'
import { useJobForm } from '../hook/useJobForm'

const blankForm = {
  titulo: '',
  empresa: '',
  ubicacion: '',
  descripcion: '',
  technology: '',
  modalidad: '',
  nivel: ''
}

function toFormValues(job) {
  if (!job) return blankForm
  return {
    titulo: job.titulo || '',
    empresa: job.empresa || '',
    ubicacion: job.ubicacion || '',
    descripcion: job.descripcion || '',
    technology: job.data?.technology || '',
    modalidad: job.data?.modalidad || '',
    nivel: job.data?.nivel || ''
  }
}

export function JobForm({
  initialValues,
  onSubmit,
  submitLabel = 'Publicar empleo',
  cancelTo = '/'
}) {
  const initial = toFormValues(initialValues)
  const { form, loading, error, handleChange, handleSubmit } = useJobForm({
    initialValues: initial,
    onSubmit
  })

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.field}>
        <label htmlFor='job-titulo'>Título del empleo</label>
        <input
          id='job-titulo'
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
        <label htmlFor='job-empresa'>Empresa</label>
        <input
          id='job-empresa'
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
        <label htmlFor='job-ubicacion'>Ubicación</label>
        <input
          id='job-ubicacion'
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
        <label htmlFor='job-descripcion'>Descripción</label>
        <textarea
          id='job-descripcion'
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
          <label htmlFor='job-technology'>Tecnología</label>
          <select
            id='job-technology'
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
          <label htmlFor='job-modalidad'>Modalidad</label>
          <select
            id='job-modalidad'
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
          <label htmlFor='job-nivel'>Nivel de experiencia</label>
          <select
            id='job-nivel'
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
        </div>
      )}

      <div className={styles.actions}>
        <Link to={cancelTo} className={styles.linkButton}>Cancelar</Link>
        <button type='submit' disabled={loading}>
          {loading ? 'Guardando...' : submitLabel}
        </button>
      </div>
    </form>
  )
}
