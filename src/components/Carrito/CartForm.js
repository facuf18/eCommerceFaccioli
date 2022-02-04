import "./cartForm.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";


const CartForm = ({ addBuyer }) => {

  const [formSent, setFormSent] = useState(false);

  return (
  <Formik
    initialValues = {{
        nombre: '',
        apellido: '',
        email: ''
      }}
    onSubmit = {(values, { resetForm }) => {
        addBuyer(values);
        resetForm();
        setFormSent(true);
        setTimeout(() => setFormSent(false), 2000);
      }} 
    validate = {(values) => {
          let errores = {};

          //Validacion nombre
          if(!values.nombre){
            errores.nombre = 'Por favor, ingrese un nombre'
          } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombre)){
            errores.nombre = 'El nombre solo puede contener letras y espacios'
          }

          //Validacion apellido
          if(!values.apellido){
            errores.apellido = 'Por favor, ingrese un apellido'
          } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.apellido)){
            errores.apellido = 'El apellido solo puede contener letras y espacios'
          }

          //Validacion email
          if(!values.email){
						errores.email = 'Por favor ingresa un email'
					} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
						errores.email = 'Ingrese un email válido'
					}

          return errores;
        }}
  >
    {( { errors } ) => (
      <Form className="card col-lg-6 mb-5">
        <div className="my-2 mx-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <Field 
            type="text"
            className="form-control"
            id="nombre" 
            name="nombre"
            placeholder="Ingrese su nombre"
            />
          <ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
        </div>
        <div className="my-2 mx-3">
            <label htmlFor="apellido" className="form-label">Apellido</label>
            <Field 
              type="text" 
              className="form-control" 
              id="apellido" 
              name="apellido"
              placeholder="Ingrese su apellido"/>
            <ErrorMessage name="apellido" component={() => (<div className="error">{errors.apellido}</div>)} />
          </div>
        <div className="my-2 mx-3">
            <label htmlFor="email" className="form-label">Email</label>
            <Field 
              type="text" 
              className="form-control" 
              id="email" 
              name="email"
              placeholder="Ingrese su email"/>
            <ErrorMessage name="email" component={() => (<div className="error">{errors.email}</div>)} />
        </div>
        <div className="my-2 mx-3">
          <button type="submit" className="btn btn-outline-danger">Enviar</button>
          {formSent && <p className="correct">Formulario enviado con éxito!</p>}
        </div>
      </Form>
    )}
  </Formik>
  );
};

export default CartForm;