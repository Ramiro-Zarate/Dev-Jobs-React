import { JobCard } from './JobCard'
import { useJobsStore } from '../store/jobsStore'
import styles from './LocalJobsSection.module.css'

export function LocalJobsSection() {
  const localJobs = useJobsStore((state) => state.localJobs)

  if (!localJobs.length) return null

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2>Tus publicaciones</h2>
        <p>Empleos que creaste o editaste en este navegador.</p>
      </header>
      <div className={styles.grid}>
        {localJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  )
}
