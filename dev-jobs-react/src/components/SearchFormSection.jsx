import { useId } from 'react'
import styles from './SearchFormSection.module.css'

export function SearchFormSection( {onSearch, onTextFilter} ){
  const idText = useId()
  const idTechnology = useId()
  const idLocation = useId()
  const idExperienceLevel = useId()
  
  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget) // Devuelve todos los datos del form

    const filters = { // Devuelve cada campo específico
      technology: formData.get(idTechnology),
      location: formData.get(idLocation),
      experienceLevel: formData.get(idExperienceLevel)
    }

    onSearch(filters)

  }

  const handleTextChange = (event) => {
        const text = event.target.value
        onTextFilter(text)
  }
  



    return (
        <section>
        <h1>Encuentra tu próximo trabajo</h1>
        <p>Explora miles de oportunidades en el sector tecnológico.</p>
        <form onChange={handleSubmit} role="search">
        <div className={styles.formSearch}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-search">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
            <input name={idText} type='text' placeholder="Buscar empleos, habilidades o empresas" onChange={handleTextChange}/>
            
        </div>

        <div className={styles.searchFilters}>
          <select name={idTechnology} id="filter-technology"> 
            <option value="">Tecnología</option>
            <optgroup label="Tecnologías populares">
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="react">React</option>
              <option value="nodejs">Node.js</option>
            </optgroup>
            <option value="java">Java</option>
            <option value="csharp">C#</option>
            <option value="c">C</option>
            <option value="c++">C++</option>
            <option value="ruby">Ruby</option>
            <option value="php">PHP</option>
          </select>

          <select name={idLocation} id="filter-location">
            <option value="">Ubicación</option>
            <option value="remoto">Remoto</option>
            <option value="cdmx">Ciudad de México</option>
            <option value="guadalajara">Guadalajara</option>
            <option value="monterrey">Monterrey</option>
            <option value="barcelona">Barcelona</option>
          </select>

          <select name={idExperienceLevel} id="filter-experience-level">
            <option value="">Nivel de experiencia</option>
            <option value="junior">Junior</option>
            <option value="mid">Mid-level</option>
            <option value="senior">Senior</option>
            <option value="lead">Lead</option>
          </select>
        </div>
        </form>
      </section>
    )
}