import { motion } from "framer-motion";
import motoAmarrilla from "../../img/diapositivas/recortadas/delivery-amarillo-recorte.jpg";

export const AboutScreen = () => {
  return (
    <motion.div
      className="container mt-5 p-5 about-background"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5, type: 'tween' }}
      viewport={{ amount: 0.5 }}
      id="quienes-somos"
    >
      <div className="row">
        <h2 className="text-center">Quienes somos?</h2>
        <div className="col-12 col-md-6">
          <p>MF GESTIONES cuenta con una experiencia de más de 16 años en el mercado, con una trayectoria brindando servicios de logística urbana desde Villa Allende y sus alrededores a Córdoba Capital, aportando soluciones operativas de acuerdo a la necesidad de cada cliente. SOMOS… UNA EXTENSION DE SU EMPRESA.</p>
          <p>Nuestro trato es personalizado, creando así la confianza que su empresa necesita para la administración de sus trámites, logrando gestiones oportunas de una forma eficiente. Brindar soluciones es nuestro trabajo, la satisfacción de nuestros clientes es nuestro objetivo. Trabajamos en el día a día con esta meta, brindar el servicio de mensajería que usted necesita.</p>
        </div>
        <div className="col-12 col-md-6  d-flex align-items-center justify-content-center ">
          <div className="imagen-container">
            <img src={motoAmarrilla} alt="camioneta" className='img-fluid rounded' />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
