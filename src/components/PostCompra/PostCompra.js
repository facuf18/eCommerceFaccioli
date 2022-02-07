import React from 'react';
import { useContexto } from "../Context/CartContext";

const PostCompra = () => {

    const { idCompra } = useContexto();

  return (
  <div className='container'>
      <p className='text-center mt-5 display-4'>Compra finalizada con éxito.</p>
      <p className='text-center pt-5'>El id de la compra es: <b>{idCompra}</b></p>
  </div>);
};

export default PostCompra;
