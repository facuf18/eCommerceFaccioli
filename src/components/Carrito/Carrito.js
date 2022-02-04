import { useContexto } from "../Context/CartContext";
import { dataBase } from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import CartForm from "./CartForm";
import { useState } from "react";

const Carrito = () => {

    const { carrito, removeItem, clearCart } = useContexto();
    const [buyerData, setBuyerData] = useState({});

    let total = 0;
    carrito.map(item => {
        return total += item.cantidad * item.precio;
    })

    const handleBuyerData = (newBuyer) => {
        setBuyerData(newBuyer);
    }

    console.log(buyerData);

    const finalizarCompra = () => {
        console.log("Compra finalizada");

        const ventasCollection = collection(dataBase, "ventas");
        addDoc(ventasCollection, {
            buyer: buyerData,
            items: carrito,
            date: serverTimestamp(),
            total: total
        })
        .then((resultado) =>{
            console.log(resultado.id);
        })
        
        clearCart();
    }

    return (
        <div className="container">
            <h1 className="text-center">Carrito</h1>
            {carrito.length > 0 ? (
            <div>
            <table className="table align-middle table-striped">
                <thead>
                    <th scope="col">Producto</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Subtotal</th>
                </thead>
                <tbody>
                    {carrito.map ((producto) => {
                        return (
                        <tr>
                            <td className="text-uppercase">{producto.marca} {producto.modelo}</td>
                            <td>{producto.cantidad}</td>
                            <td>${producto.precio}</td>
                            {<td>${producto.cantidad*producto.precio}</td>}
                            <td><button className="btn btn-outline-danger" onClick={() => {removeItem(producto.id, producto.cantidad)}}>Borrar</button></td>
                        </tr>
                        )
                    })}
                </tbody>
            </table> 
            <div className="d-flex flex-row align-items-center">
                <p className="display-6 col-md-10">Precio total: ${total}</p>
            </div>
            <CartForm addBuyer={handleBuyerData}/>
            <div className="d-flex flex-row-reverse">
                <button className="btn btn-danger col-md-2" onClick={finalizarCompra}>Finalizar compra</button>
                <button className="btn btn-danger col-md-2 me-3" onClick={clearCart}>Vaciar carrito</button>
            </div>
            </div>) : <p>No hay productos en el carrito</p>}
        </div>
    )
}

export default Carrito
