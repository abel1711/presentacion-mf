import { motion } from 'framer-motion'
import logo from '../../img/mf-gestiones.jpg'

export const ServiciosScreen = () => {
  return (
    <motion.div 
        className="container py-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        transition  = {{ duration: 0.5, type: 'tween' }}
        viewport={{ amount: 0.5 }}
        id="servicios"
    >
      <div className="row">
        <div className="col-12 col-md-6">
          <h2>Servicios</h2>
          <h4>Gestiones coordinadas</h4>
          <p>Organiza tus trámites en conjunto con la empresa acordando horario de recepción  y rendición de los mismos permitiendo optimizar su trabajo en tiempo y costo.</p>
          <h4>Gestiones Eventuales</h4>
          <p>Son las que se presentan en forma ocasional, sin previo aviso y necesitan ser atendidas con urgencia.</p>
          <h4>Mail</h4>
          <p>Reparto masivo de cartas, documentos, invitaciones, avisos y facturas.</p>
          <h4>Verificacion domiciliaria</h4>
          <p>Servicio de verificación domiciliaria consignando laterales, entre calles y descripción de vivienda con plano.</p>
          <h4>Tramites</h4>
          <ul>
            <li>Gestiones de cobranza</li>
            <li>Depósitos en bancos</li>
            <li>Obras sociales - Clinicas - Hospitales</li>
            <li>Gestiones en estudios Contables y Abogados</li>
            <li>Gestiones en Farmacias - Cámaras - Sindicatos</li>
          </ul>
          <h4>Encomiendas</h4>
          <p>Retiro  y  Re despacho de Encomiendas  a toda la provincia y el país.</p>
        </div>
        <div className="col-12 col-md-6  d-flex align-items-center justify-content-center ">
          <div className="imagen-container">
            <img src={ logo } alt="logo" className='img-fluid rounded'/>
          </div>
        </div>
      </div>
    </motion.div>
  )
}