import { JobCard } from './JobCad'



export function JobListingCard( {jobs} ){
    return (
            
            <section className="tarjetasResultado">
            <div className="job-listing">
                {jobs.map(job => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>
            </section>
)
}
