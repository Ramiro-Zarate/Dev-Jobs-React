import styles from './Header.module.css'
import { Link } from './Link'
import { NavLink } from 'react-router'
import { useAuthStore } from "../store/authStore";

export function Header(){
  return(
  <header className={styles.header}>
    <Link to="./">
      <h1>
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
        DevJobs
      </h1>
    </Link>
    <nav className={styles.headerNav}>
        <NavLink to="">Buscar</NavLink>
        <NavLink className={({isActive})=> isActive ? 'navLinkActive' : ''} to="../search">Empleos</NavLink>
        <NavLink to="">Empresas</NavLink>
        <NavLink to="">Salarios</NavLink>
    </nav>
    <div className={styles.buttonSection}>
        <button className={styles.headerButton}>Publicar un empleo</button>
        <HeaderUserButton />
    </div>
  </header>
    )
}

export function HeaderUserButton(){
    const {isLoggedIn, login, logout} = useAuthStore()

    return isLoggedIn
        ? <button className={styles.headerButton} onClick={logout}>Cerrar Sesión</button>
        : <button className={styles.headerButton} onClick={login}>Iniciar Sesión</button>
}