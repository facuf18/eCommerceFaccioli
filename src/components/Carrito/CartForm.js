import { Formik, Form, Field, ErrorMessage } from "formik";

const CartForm = ({ setBuyerData }) => {

  return (
  <Formik
    initialValues = {{
        nombre: '',
        apellido: '',
        email: ''
      }}
    onSubmit = {(values, { resetForm }) => {
        resetForm();
        setBuyerData(values);
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
      <Form className="row g-3">
        <div className="col-md-2">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <Field 
            type="text" 
            className="form-control" 
            id="nombre" 
            name="nombre"
            placeholder="Ingrese su nombre"
            />
          <ErrorMessage name="nombre" component={() => (<div>{errors.nombre}</div>)} />
        </div>
        <div className="col-md-2">
            <label htmlFor="apellido" className="form-label">Apellido</label>
            <Field 
              type="text" 
              className="form-control" 
              id="apellido" 
              name="apellido"
              placeholder="Ingrese su apellido"/>
            <ErrorMessage name="apellido" component={() => (<div>{errors.apellido}</div>)} />
          </div>
        <div className="col-md-3">
            <label htmlFor="email" className="form-label">Email</label>
            <Field 
              type="text" 
              className="form-control" 
              id="email" 
              name="email"
              placeholder="Ingrese su email"/>
            <ErrorMessage name="email" component={() => (<div>{errors.email}</div>)} />
        </div>
        <button type="submit">Enviar</button>
      </Form>
    )}
  </Formik>
  
  );
};

export default CartForm;
