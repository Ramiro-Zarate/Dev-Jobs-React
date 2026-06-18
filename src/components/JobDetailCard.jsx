import { useState } from "react"
import { Link } from "react-router"
import snarkdown from 'snarkdown'
import { useAuthStore } from "../store/authStore"
import styles from './JobDetailCard.module.css'

function JobSection({ title, content }) {
    const html = snarkdown(content || '')
    return (
        <section className={styles.jobSection}>
            <h2>
                {title}
            </h2>
            <div
                dangerouslySetInnerHTML={{ __html: html }}
                className={styles.contentSection}
            >
            </div>
        </section>
    )
}

export function JobDetailCard({ job, onDelete }) {
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
                    <div className={styles.headerActions}>
                        <DetailApplyButton />
                        <Link
                            to={`/search/${job.id}/edit`}
                            className={styles.editLink}
                        >
                            Editar
                        </Link>
                        <DeleteControl onDelete={onDelete} />
                    </div>
                </header>
                {job.content?.description && (
                    <JobSection title='Descripción del puesto' content={job.content.description} />
                )}
                {job.content?.responsibilities && (
                    <JobSection title='Reponsabilidades' content={job.content.responsibilities} />
                )}
                {job.content?.requirements && (
                    <JobSection title='Requisitos' content={job.content.requirements} />
                )}
                {job.content?.about && (
                    <JobSection title='Acerca de la empresa' content={job.content.about} />
                )}
            </div>

        </section>
    )
}

function DetailApplyButton() {
    const { isLoggedIn } = useAuthStore()

    return (
        <button disabled={!isLoggedIn}>
            {isLoggedIn ? 'Aplicar Ahora' : 'Inicia sesión para aplicar'}
        </button>
    )
}

function DeleteControl({ onDelete }) {
    const [confirming, setConfirming] = useState(false)
    const [error, setError] = useState(null)

    const handleConfirm = () => {
        try {
            onDelete()
        } catch (err) {
            setError(err.message)
            setConfirming(false)
        }
    }

    if (confirming) {
        return (
            <div className={styles.confirmDelete}>
                <span>¿Eliminar?</span>
                <button
                    onClick={handleConfirm}
                    className={styles.confirmButton}
                >
                    Sí
                </button>
                <button
                    onClick={() => setConfirming(false)}
                    className={styles.cancelButton}
                >
                    No
                </button>
                {error && <span className={styles.errorText}>{error}</span>}
            </div>
        )
    }

    return (
        <button
            onClick={() => setConfirming(true)}
            className={styles.deleteButton}
        >
            Eliminar
        </button>
    )
}
