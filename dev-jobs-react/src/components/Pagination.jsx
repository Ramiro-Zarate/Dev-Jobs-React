export function Pagination ( { currentPage = 1, totalPages = 10 }){
    // Genero un array de páginas a mostrar
    const pages = Array.from( {length: totalPages}, (_, i) => i + 1)

    const isFirstPage = currentPage === 1
    const isLastpage = currentPage === totalPages

    const stylePrevButton = isFirstPage ? { PointerEvent: 'none', opacity: .5} : {}
    const styleNextButton = isLastpage ? { PointerEvent: 'none', opacity: .5} : {}


    return (
        <nav className="paginacion">
                    {
                        !isFirstPage && (
                            <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg></a>
                        )
                    }
                    {pages.map(page => 
                        <a
                        href="#"
                        className={currentPage == page ? 'is-active': ''}
                        >
                            {page}
                        </a>
                    )}
                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg></a>
        </nav>
    )
}