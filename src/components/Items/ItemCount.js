import { useState } from 'react';

export const ItemCount = ({stock, initial, onAdd}) => {

    let [contador, setContador] = useState(1);

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
                        <button type="submit" className="btn btn-danger mt-2" onClick={onAdd}>Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
