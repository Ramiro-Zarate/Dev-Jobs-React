import { useJobsStore } from '../store/jobsStore'

const API_URL = 'https://dev-jobs-api-sepia.vercel.app/jobs'

function generateId() {
  if (typeof crypto !== 'undefined' && crypto?.randomUUID) {
    return crypto.randomUUID()
  }
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`
}

function buildPayload(formData) {
  return {
    titulo: formData.titulo,
    empresa: formData.empresa,
    ubicacion: formData.ubicacion,
    descripcion: formData.descripcion || '',
    data: {
      technology: formData.technology || '',
      modalidad: formData.modalidad || '',
      nivel: formData.nivel || ''
    }
  }
}

export async function fetchJobs(params = {}) {
  const search = new URLSearchParams()
  Object.entries(params).forEach(([key, value]) => {
    if (value !== '' && value !== null && value !== undefined) {
      search.append(key, value)
    }
  })

  const response = await fetch(`${API_URL}?${search.toString()}`)

  if (!response.ok) {
    const data = await response.json().catch(() => null)
    const message = data?.message || data?.error || 'Error al obtener los empleos'
    throw new Error(message)
  }

  return response.json()
}

export async function fetchJobById(id) {
  const local = useJobsStore.getState().getLocalJob(id)
  if (local) return local

  const response = await fetch(`${API_URL}/${id}`)

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('Empleo no encontrado')
    }
    const data = await response.json().catch(() => null)
    const message = data?.message || data?.error || 'Error al obtener el empleo'
    throw new Error(message)
  }

  return response.json()
}

export function createJob(formData) {
  const payload = buildPayload(formData)
  const job = {
    id: generateId(),
    ...payload,
    content: {
      description: payload.descripcion || '',
      responsibilities: '',
      requirements: '',
      about: ''
    },
    createdAt: new Date().toISOString()
  }
  useJobsStore.getState().addLocalJob(job)
  return job
}

export function updateJob(id, formData) {
  const store = useJobsStore.getState()

  if (!store.isLocalJob(id)) {
    throw new Error('Solo se pueden editar empleos guardados en este navegador')
  }

  const payload = buildPayload(formData)
  store.updateLocalJob(id, {
    ...payload,
    content: {
      ...(store.getLocalJob(id)?.content || {}),
      description: payload.descripcion
    }
  })

  return store.getLocalJob(id)
}

export function createLocalOverride(job, formData) {
  const payload = buildPayload(formData)
  const override = {
    ...job,
    id: job.id,
    titulo: payload.titulo,
    empresa: payload.empresa,
    ubicacion: payload.ubicacion,
    descripcion: payload.descripcion,
    data: { ...(job.data || {}), ...payload.data },
    content: {
      ...(job.content || {}),
      description: payload.descripcion || job.content?.description || ''
    },
    overriddenAt: new Date().toISOString()
  }
  useJobsStore.getState().addLocalJob(override)
  return override
}

export function deleteJob(id) {
  const store = useJobsStore.getState()

  if (!store.isLocalJob(id)) {
    throw new Error('Solo se pueden eliminar empleos guardados en este navegador')
  }

  store.removeLocalJob(id)
}

export { useJobsStore }
