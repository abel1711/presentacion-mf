import './loading.css';
import logo from '../../img/mf-gestiones.jpg'

export const LoadingScreen = () => {
  return (
    <div className="loading-container">
        <img src={ logo } alt="logo-mf-gestiones" className='img-fluid loading rounded' />
    </div>
  )
}
