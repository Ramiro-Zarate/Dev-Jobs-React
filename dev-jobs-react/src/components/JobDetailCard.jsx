import styles from './JobDetailCard.module.css'
import { Link } from 'react-router'
import snarkdown from 'snarkdown'
import { useAuthStore } from "../store/authStore"

export function JobDetailCard({job}) {
    function  JobSection ({title, content}) {
    const html = snarkdown(content)
        return (
            <section className={styles.jobSection}>
                <h2>
                    {title}
                </h2>
                <div
                 dangerouslySetInnerHTML=
                 {{__html: html}}
                 className={styles.contentSection}
                 >
                </div>
            </section>
        )
    }

    return (
        <section className={styles.mainContainer}>
            <nav className={styles.navEmpleos}>
                <Link
                    to='/search'
                    className={styles.linkEmpleo}>
                    Empleos
                </Link>
                <span>/</span>
                <span>{job.titulo}</span>
            </nav>    
            <div className={styles.container}>
                <header className={styles.headerJobs}>
                    <div className={styles.titleSection}>
                        <h1>
                            {job.titulo}
                        </h1>
                        <p>
                            {job.empresa} - {job.ubicacion}
                        </p>
                    </div>
                    <DetailApplyButton />
                </header>
                <JobSection title='Descripción del puesto' content={job.content.description}/>
                <JobSection title='Reponsabilidades' content={job.content.responsibilities} />
                <JobSection title='Requisitos' content={job.content.requirements} />
                <JobSection title='Acerca de la empresa' content={job.content.about} />
            </div>
            
        </section>
    )    
}

function DetailApplyButton(){
    const {isLoggedIn} = useAuthStore()
    
    return (
        <button disabled={!isLoggedIn}>
            {isLoggedIn ? 'Aplicar Ahora' : 'Inicia sesión para aplicar'}
        </button>
    )
}