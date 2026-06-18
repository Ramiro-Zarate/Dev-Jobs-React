import { create } from 'zustand'

const STORAGE_KEY = 'devjobs:local-jobs'

function loadFromStorage() {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveToStorage(jobs) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs))
  } catch (err) {
    console.error('Error guardando en localStorage:', err)
  }
}

export const useJobsStore = create((set, get) => ({
  localJobs: loadFromStorage(),

  addLocalJob: (job) => {
    const updated = [job, ...get().localJobs]
    saveToStorage(updated)
    set({ localJobs: updated })
  },

  updateLocalJob: (id, updates) => {
    const updated = get().localJobs.map((job) => {
      if (job.id !== id) return job
      return {
        ...job,
        ...updates,
        data: { ...(job.data || {}), ...(updates.data || {}) },
        content: { ...(job.content || {}), ...(updates.content || {}) },
        updatedAt: new Date().toISOString()
      }
    })
    saveToStorage(updated)
    set({ localJobs: updated })
  },

  removeLocalJob: (id) => {
    const updated = get().localJobs.filter((job) => job.id !== id)
    saveToStorage(updated)
    set({ localJobs: updated })
  },

  isLocalJob: (id) => get().localJobs.some((job) => job.id === id),

  getLocalJob: (id) => get().localJobs.find((job) => job.id === id)
}))
