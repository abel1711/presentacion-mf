import { motion } from 'framer-motion'
import logo from '../../img/mf-gestiones.jpg'

export const ObjetivosScreen = () => {
  return (
    <motion.div 
      className="container py-5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      transition  = {{ duration: 0.5, type: 'tween' }}
      viewport={{ amount: 0.5 }}
      id="objetivos"
      
    >
      <div className="row">
        <div className="col-12 col-md-6">
          <h2>Objetivos</h2>
          <p>Optimizar su tiempo y el de sus Clientes a través de un Servicio de Mensajería y Logística para empresas de máxima efectividad y poder de respuesta. Nuestra experiencia de tantos años en el mercado nos ha posicionado como una empresa confiable, responsable y eficiente para realizar todo tipo de trámites y envíos a cualquier punto de la ciudad y alrededores.</p>
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