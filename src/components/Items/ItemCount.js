import { useState } from 'react';

const ItemCount = ({stock, initial, onAdd}) => {

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
        onAdd (contador);
        setContador (initial);
    }

    return (
                <div>
                    <p className="card-text">Cantidad de productos: {contador}</p>
                    <div className="btn-group">
                        <button className="btn btn-outline-danger" onClick={restar}>-</button>
                        <button className="btn btn-outline-danger" onClick={sumar}>+</button>
                        
                    </div>
                    <button type="submit" className="btn btn-danger ms-2" onClick={onAddItemCount}>Agregar al carrito</button>
                </div>
    );
}

export default ItemCount;