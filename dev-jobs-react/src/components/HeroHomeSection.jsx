import styles from './HeroHomeSection.module.css'
import  backgroundImage from '../assets/background.webp'
import {useRouter} from '../hook/useRouter'

export function HeroHomeSection(){
    const {navigateTo} = useRouter()
    
        const handleSearch = (event)=>{
            event.preventDefault()
            const formData = new FormData(event.target)
            const searchTerm = formData.get('search')
    
            const url = searchTerm 
            ? `/search?text=${encodeURIComponent(searchTerm)}`
            : '/search'
    
            navigateTo(url)
        }
    return (
    <section className={styles.heroSection}>
            <img src={backgroundImage} alt="" className={styles.bgImage}/>
            <h1>Encuentra el trabajo de tus sueños</h1>
            <p>Únete a la comunidad mas grande de desarrolladores y encuentra tu próxima oportunidad</p>
            <form role="search" onSubmit={handleSearch}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg"width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
                    <input 
                        name='search'
                        required
                        type="text" 
                        placeholder="Buscar empleos por título, habilidad o empresa"
                        />
                    <button type="submit" >Buscar</button>
                </div>
            </form>
        </section>)}