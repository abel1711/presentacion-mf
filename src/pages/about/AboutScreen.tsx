import { motion } from "framer-motion";
import mfCamioneta from "../../img/mf-gestiones-camioneta.jpg";

export const AboutScreen = () => {
  return (
    <motion.div 
      className="container p-5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      transition  = {{ duration: 0.5, type: 'tween' }}
      viewport={{ amount: 0.5 }}
      id="quienes-somos"
    >
      <div className="row">
        <div className="col-12 col-md-6">
          <h2>Quienes somos?</h2>
          <p>MF GESTIONES cuenta con una experiencia de más de 18 años en el mercado, con una trayectoria  en Villa Allende y Córdoba Capital desde 2006, especializada en brindar servicios logísticos, aportando soluciones operativas de acuerdo a la necesidad de cada cliente. SOMOS… UNA EXTENSION DE SU EMPRESA .Nuestro trato es personalizado, creando así la confianza que su empresa necesita para la administración de sus trámites, logrando gestiones oportunas y satisfactorias; de una forma eficiente. Brindar soluciones, es nuestro trabajo, la satisfacción de nuestros clientes es nuestro objetivo. Trabajamos en el día a día con esta meta, brindar el servicio de mensajería que usted necesita.</p>
        </div>
        <div className="col-12 col-md-6  d-flex align-items-center justify-content-center ">
          <div className="imagen-container">
            <img src={ mfCamioneta } alt="camioneta" className='img-fluid rounded'/>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
