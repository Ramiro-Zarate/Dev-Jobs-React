import styles from './Footer.modules.css'

export function Footer(){
  return(
    <footer className={styles.footer}>
      <small>
        &copy; 2025 DevJobs. Todos los derechos reservados.
      </small>
    </footer>
  )
}