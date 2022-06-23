import { motion } from 'framer-motion'
import { FormContact } from '../../components/formContact/FormContact'
import logo from '../../img/mf-gestiones.jpg'

export const ContactoScreen = () => {
  return (
    <motion.div 
        className="container py-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        transition  = {{ duration: 0.5, type: 'tween' }}
        viewport={{ amount: 0.5 }}
        id="contacto"
    >
      <div className="row">
        <div className="col-12 col-md-6">
          <h2>Contacto</h2>
          <FormContact />
          
        </div>
        <div className="col-12 col-md-6">
          <div className="imagen-container">
            <img src={ logo } alt="logo" className='img-fluid rounded'/>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
