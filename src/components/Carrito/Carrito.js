import { useContexto } from "../Context/CartContext"

const Carrito = () => {

    const { carrito, removeItem, clear } = useContexto()

    console.log(carrito);

    return (
        <div className="container">
            <h1 className="text-center">Carrito</h1>
            <table className="table align-middle table-striped">
                <thead>
                    <th scope="col">Producto</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio</th>
                </thead>
                <tbody>
                    {carrito.map ((producto) => {
                        return (
                        <tr>
                            <td>{producto.marca} {producto.modelo}</td>
                            <td>{producto.cantidad}</td>
                            <td>${producto.precio}</td>
                            <td><button className="btn btn-outline-danger" onClick={removeItem(producto.id)}>Borrar</button></td>
                        </tr>
                        )
                    })}
                </tbody>
            </table> 
            <button className="btn btn-danger mt-5" onClick={clear}>Vaciar carrito</button>
        </div>
    )
}

export default Carrito
