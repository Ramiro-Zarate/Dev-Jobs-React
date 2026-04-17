import styles from './JobDetailCard.module.css'
import { Link } from 'react-router'
import snarkdown from 'snarkdown'

export function JobDetailCard({job}) {
    function JobSection({title, content}) {
    const html = snarkdown(content)
        return (
            <section>
                <h2>
                    {title}
                </h2>
                <div
                 dangerouslySetInnerHTML=
                 {{__html: html}}>
                </div>
            </section>
        )
    }

    return (
        <section className={styles.mainContainer}>
            <div className={styles.container}>
                <nav>
                    <Link
                    to='/search'>
                    Empleos
                    </Link>
                    <span>/</span>
                    <span>{job.titulo}</span>
                </nav>
            </div>

            <header>
                <h1>
                    {job.titulo}
                </h1>
                <p>
                    {job.empresa} - {job.ubicacion}
                </p>
            </header>

            <button>
                Aplicar Ahora
            </button>

            <JobSection title='Descripción del puesto' content={job.content.description}/>
            <JobSection title='Reponsabilidades' content={job.content.responsibilities} />
            <JobSection title='Requisitos' content={job.content.requirements} />
            <JobSection title='Acerca de la empresa' content={job.content.about} />
        </section>
    )    
}