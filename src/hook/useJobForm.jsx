import { useState } from 'react'

export function useJobForm({ initialValues, onSubmit }) {
  const [form, setForm] = useState(initialValues)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (loading) return

    setLoading(true)
    setError(null)

    try {
      await onSubmit(form)
    } catch (err) {
      setError({ message: err?.message || 'Error al guardar el empleo' })
      setLoading(false)
    }
  }

  return {
    form,
    loading,
    error,
    handleChange,
    handleSubmit
  }
}
