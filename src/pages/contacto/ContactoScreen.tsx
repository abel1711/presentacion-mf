import { motion } from 'framer-motion';
import { FormContact } from '../../components/formContact/FormContact';
import logoWhatsapp from '../../img/contacto/600px-Whatsapp_logo_svg.png';
import logoFacebook from '../../img/contacto/Facebook_logo_(square).png';
import logoInstagram from '../../img/contacto/Instagram_logo_2016.svg.png';
import logoLinkedIn from '../../img/contacto/LinkedIn_logo_initials.png';
import logoTwitter from '../../img/contacto/Twitter-logo.svg.png';
import './contacto.css';

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
          <h2 className='text-center'>Contacto</h2>
        <div className="col-12 col-md-6">
          <FormContact />
          
        </div>
        <div className="col-12 col-md-6  d-flex align-items-center justify-content-center">
          <div className="imagen-container-contacto ">
            <a className='anchor-imagen' href="https://bit.ly/3bqF5EK" target={'_blank'}>
              <img src={ logoWhatsapp } alt="logo" className='imagen img-fluid rounded'/>
            </a>
            <a className='anchor-imagen' href="https://bit.ly/3xUPrUP" target={'_blank'}>
              <img src={ logoFacebook } alt="logo" className=' imagen img-fluid rounded'/>
            </a>
            <a className='anchor-imagen' href="">
              <img src={ logoInstagram } alt="logo" className=' imagen img-fluid rounded'/>
            </a>
            <a className='anchor-imagen' href="">
              <img src={ logoLinkedIn } alt="logo" className=' imagen img-fluid rounded'/>
            </a>
            <a className='anchor-imagen' href="">
              <img src={ logoTwitter } alt="logo" className=' imagen img-fluid rounded'/>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
