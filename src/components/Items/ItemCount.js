import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./itemCount.css"

const ItemCount = ({stock, initial, onAdd}) => {

    let [contador, setContador] = useState(initial);
    let [mostrar, setMostrar] = useState(false);

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
        setMostrar (true)
    }

    if(mostrar){
        return (
                    <div className="counterPosition">
                        <p className="card-text">Cantidad de productos: {contador}</p>
                        <div className="counterButtons">
                            <div className="btn-group">
                                <button className="btn btn-outline-danger" onClick={restar}>-</button>
                                <button className="btn btn-outline-danger" onClick={sumar}>+</button>
                            </div>
                            <button type="submit" className="btn btn-danger agregarButton" onClick={onAddItemCount}>Agregar al carrito</button>
                            <Link to="/carrito">
                                <button type="submit" className="btn btn-danger">Finalizar compra</button>
                            </Link>
                        </div>
                    </div>
        );
    } else {
                return (
                    <div className="counterPosition">
                        <p className="card-text">Cantidad de productos: {contador}</p>
                        <div className="counterButtons">
                            <div className="btn-group">
                                <button className="btn btn-outline-danger" onClick={restar}>-</button>
                                <button className="btn btn-outline-danger" onClick={sumar}>+</button>
                            </div>
                            <button type="submit" className="btn btn-danger agregarButton" onClick={onAddItemCount}>Agregar al carrito</button>
                        </div>
                    </div>
        );
    }
}

export default ItemCount;