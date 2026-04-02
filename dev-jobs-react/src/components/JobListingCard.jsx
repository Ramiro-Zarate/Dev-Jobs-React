import { JobCard } from './JobCad'
import jobsData from '../data.json'


export function JobListingCard(){
    return (
            
            <section className="tarjetasResultado">
            <div className="job-listing">
                {jobsData.map(job => (
                    <JobCard job={job} />
                ))}
            </div>
            </section>
)
}
