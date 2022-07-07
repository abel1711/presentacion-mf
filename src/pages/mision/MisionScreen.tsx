import { motion } from 'framer-motion'
import apretonManos from '../../img/diapositivas/recortadas/apreton-manos-recorte.jpg';

export const MisionScreen = () => {
  return (
    <motion.div 
      className="container p-5 mt-5 mision-background"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      transition  = {{ duration: 0.5, type: 'tween' }}
      viewport={{ amount: 0.5 }}
      id="nuestra-mision"
    >
      <div className="row">
          <h2 className='text-center'>Nuestra Mision</h2>
        <div className="col-12 col-md-6">
          <p>Brindar un servicio confiable, seguro y eficiente, capaz de satisfacer plenamente las necesidades individuales de todos nuestros Clientes, generando valor tanto para ellos como para nuestros colaboradores internos.</p>
        </div>
        <div className="col-12 col-md-6  d-flex align-items-center justify-content-center ">
          <div className="imagen-container">
            <img src={ apretonManos } alt="logo" className='img-fluid rounded'/>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
