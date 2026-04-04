import styles from './Header.module.css'

export function Header(){
  return(
  <header className={styles.header}>
      <h1>
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
        DevJobs
      </h1>
      <nav className={styles.headerNav}>
        <a href="">Buscar</a>
        <a href="./empleos/empleos.html">Empleos</a>
        <a href="">Empresas</a>
        <a href="">Salarios</a>
      </nav>
      <div className={styles.buttonSection}>
        <button className={styles.headerButton}>Publicar un empleo</button>
        <button className={styles.headerButton}>Iniciar Sesión</button>
      </div>
    </header>
    )
}