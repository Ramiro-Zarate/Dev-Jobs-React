import styles from './Home.module.css'
import  backgroundImage from '../assets/background.webp'

export function HomePage () {
    return (
        <main>
        <section className={styles.heroSection}>
            <img src={backgroundImage} alt="" className={styles.bgImage}/>
            <h1>Encuentra el trabajo de tus sueños</h1>
            <p>Únete a la comunidad mas grande de desarrolladores y encuentra tu próxima oportunidad</p>
            <form role="search">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg"width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
                    <input type="text" placeholder="Buscar empleos por título, habilidad o empresa"/>
                    <button type="submit">Buscar</button>
                </div>
            </form>
        </section>
        <section className={styles.featureSection}>
            <header>
            <h2>¿Por qué DevJobs?</h2>
            <p>DevJobs es la principal bolsa de trabajo para desarrolladores. Conectamos a los desarrolladores con las mejores empresas del mundo.</p>
            </header>
            <footer className={styles.gridFeatures}> 
            <article className={styles.card}>
                <svg xmlns="http://www.w3.org/2000/svg"width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-briefcase-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9" /><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" /></svg>
                <h3>Encuentra el trabajo de tus sueños</h3>
                <p>Busca miles de empleos de las mejores empresas de todo el mundo.</p>
            </article>
            <article className={styles.card}>
                <svg xmlns="http://www.w3.org/2000/svg"width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-user-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M16 19h6" /><path d="M19 16v6" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4" /></svg>
                <h3>Conecta con las mejores empresas</h3>
                <p>Conecta con empresas que esán contratando por tus habilidades.</p>
            </article>
            <article className={styles.card}>
                <svg xmlns="http://www.w3.org/2000/svg"width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-building-skyscraper"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l18 0" /><path d="M5 21v-14l8 -4v18" /><path d="M19 21v-10l-6 -4" /><path d="M9 9l0 .01" /><path d="M9 12l0 .01" /><path d="M9 15l0 .01" /><path d="M9 18l0 .01" /></svg>
                <h3>Obtén el salario que mereces</h3>
                <p>Obtén el salario que mereces con nuestra calculadora de salarios.</p>
            </article>
        </footer>
        </section>
    </main>
    )
}