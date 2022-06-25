
import './sidebar.css';

export const Sidebar = () => {

    


  return (
    <div className="sidebar-container">

        <button className="btn btn-outline-secondary d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">
            <i className="bi bi-list"></i>
        </button>

            <div className={`offcanvas-lg offcanvas-end  bg-dark`} tabIndex={-1} id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasResponsiveLabel">MF - Cadetería</h5>
                    <button type="button" className="btn-close text-white" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="sidebar-ul list-group list-group-horizontal-lg ">
                        <a href="#quienes-somos" className='list-group-item list-group-item-action'>Quienes somos</a>
                        <a href="#objetivos" className='list-group-item list-group-item-action'>Objetivos</a>
                        <a href="#nuestra-mision" className='list-group-item list-group-item-action'>Nuestra mision</a>
                        <a href="#servicios" className='list-group-item list-group-item-action'>Servicios</a>
                        <a href="#contacto" className='list-group-item list-group-item-action'>Contacto</a>
                    </div>
                </div>
            </div>
    </div>
  )
}
