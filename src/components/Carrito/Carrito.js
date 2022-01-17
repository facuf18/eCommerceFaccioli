import { useContexto } from "../Context/CartContext"

const Carrito = () => {

    const { carrito, removeItem, clearCart } = useContexto()

    console.log(carrito);

    const finalizarCompra = () => {
        console.log("Compra finalizada");
        clearCart();
    }

    let total = 0;
    carrito.map(item => {
        return total += item.cantidad * item.precio;
    })

    console.log(total)

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
            <div className="row">
                    <p className="display-6">El precio total es: ${total}</p>
            </div>
            </div>) : <p>No hay productos en el carrito</p>}
            
            <div className="d-flex flex-row-reverse">
                <button className="btn btn-danger mt-5" onClick={finalizarCompra}>Finalizar compra</button>
                <button className="btn btn-danger mt-5 me-3" onClick={clearCart}>Vaciar carrito</button>
            </div>
        </div>
    )
}

export default Carrito
