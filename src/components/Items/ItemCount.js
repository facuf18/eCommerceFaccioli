import { useState } from 'react';

export const ItemCount = ({stock, initial, onAdd}) => {

    let [contador, setContador] = useState(initial);

    const sumar = () => {
        if (contador < stock) {
            setContador (contador + 1);
        } 
    }
    
    const restar = () => {
        if (contador > initial) {
            setContador (contador - 1);
        }
    }

    const onAddItemCount = () => {
        onAdd ();
        setContador (initial);
    }

    return (
        <div className="container">   
            <div className="card col-lg-3">
                <div className="card-body">
                    <p className="card-text">Cantidad de productos: {contador}</p>
                    <div className="btn-group">
                        <button className="btn btn-outline-danger" onClick={restar}>-</button>
                        <button className="btn btn-outline-danger" onClick={sumar}>+</button>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-danger mt-2" onClick={onAddItemCount}>Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    );
}