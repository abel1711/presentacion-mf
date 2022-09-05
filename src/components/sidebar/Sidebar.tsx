import  icono  from "../../img/icono-mf.jpg";
import './sidebar.css';

export const Sidebar = () => {

    


  return (
    <div className="sidebar-container">
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark p-0">
            <div className="container-fluid container-nav">
                <a className="navbar-brand p-0 m-0" href="#">
                    <img src={icono} alt="logo-mf" className="rounded img-fluid icono-nav" width={25} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#quienes-somos" className='nav-link'>Quienes somos</a>
                        </li>
                        <li className="nav-item">
                            <a href="#objetivos" className='nav-link'>Objetivos</a>
                        </li>
                        <li className="nav-item">
                            <a href="#nuestra-mision" className='nav-link'>Nuestra mision</a>
                        </li>
                        <li className="nav-item">
                            <a href="#servicios" className='nav-link'>Servicios</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contacto" className='nav-link'>Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}
