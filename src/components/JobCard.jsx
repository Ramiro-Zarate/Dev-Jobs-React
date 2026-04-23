import { useState } from "react"
import { Link } from "react-router"
import styles from './JobCard.module.css'
import { useAuthStore } from "../store/authStore"

export function JobCard({job}){
    const [isApplied, setIsApplied] = useState(false)

    const hanldeApplyClick = () => {
        setIsApplied(true)
    }

    const buttonClasses = isApplied ? 'button-applied-job is-applied' : 'button-applied-job'
    const buttonText = isApplied ? 'Aplicado' : 'Aplicar'

    if (!job) return null;

    return(
        <article
            className='job-listing-card'
            data-modalidad={job.data?.modalidad}
            data-nivel={job.data?.nivel}
            data-technology={job.data?.technology}
        >
            <div>
                <Link to={`/search/${job.id}`} className={styles.jobLink}>
                <h3>{job.titulo}</h3>
                </Link>
                
                <small>{job.empresa} | {job.ubicacion}</small>
                <p>{job.descripcion}</p>
            </div>
            <div className={styles.applyButtonSection}>
                <Link to={`/search/${job.id}`} className={styles.detailLink}>Ver detalles</Link>
                <DetailApplyButton />
                {/* <button className={buttonClasses} onClick={hanldeApplyClick}>{buttonText}</button> */}
            </div>
            
            
        </article>
    )
}

function DetailApplyButton(){
    const {isLoggedIn} = useAuthStore()
    
    return (
        <button disabled={!isLoggedIn}>
            {isLoggedIn ? 'Aplicar' : 'Aplicar'}
        </button>
    )
}