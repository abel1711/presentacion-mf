import { Formik } from "formik";
import * as Yup from 'yup';


export const FormContact = () => {


  return (
    <Formik
       initialValues={{ name: '', email: '', mensaje: '' }}
       validationSchema={Yup.object({
         name: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('Requerido'),
        mensaje: Yup.string().required('Requerido'),
         email: Yup.string().email('Email invalido').required('Requerido'),
       })}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {formik => (

         <form onSubmit={formik.handleSubmit}>

            <div className="form-floating mb-2">
                <input
                    id="name"
                    type="text"
                    className={`form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`} 
                    placeholder="nombre"
                    {...formik.getFieldProps('name')}
                />
                <label htmlFor="name" className="form-label text-black">Nombre</label>
            </div>
           {formik.touched.name && formik.errors.name ? (
             <div className="text-danger text-center mb-2">{formik.errors.name}</div>
           ) : null}
 
            <div className="form-floating mb-2">
                <input 
                    id="email" 
                    className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`} 
                    placeholder="email" 
                    type="email" 
                    {...formik.getFieldProps('email')}
                />
                <label htmlFor="email" className="form-label text-black">Email</label>
                {formik.touched.email && formik.errors.email ? (
                    <div className="text-danger text-center mb-2">{formik.errors.email}</div>
                ) : null}
            </div>

            <div className="form-floating mb-2">
                <textarea 
                    id="mensaje" 
                    className={`form-control ${formik.touched.mensaje && formik.errors.mensaje ? 'is-invalid' : ''}`} 
                    placeholder="mensaje" 
                    style={{
                        height:'150px'
                    }}
                    {...formik.getFieldProps('mensaje')} 
                />
                <label htmlFor="mensaje" className="form-label text-black">Mensaje</label>
                {formik.touched.mensaje && formik.errors.mensaje ? (
                    <div className="text-danger text-center mb-2">{formik.errors.mensaje}</div>
                ) : null}
            </div>
 
           <button type="submit" className="btn btn-outline-primary w-100 mt-2">Enviar</button>
         </form>
       )}
     </Formik>
  )
}
