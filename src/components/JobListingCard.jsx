import { JobCard } from './JobCad'
import styles from './JobListingCard.module.css'


export function JobListingCard( {jobs} ){
    return (
            
            <section className={styles.tarjetasResultado}>
            <div className={styles.jobListing}>
                {jobs.map(job => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>
            </section>
)
}
