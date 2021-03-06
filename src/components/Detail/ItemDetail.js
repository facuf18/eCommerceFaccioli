import ItemCount from "../Items/ItemCount"
import "./itemDetail.css"
import { useContexto } from "../Context/CartContext"

const ItemDetail = ({producto}) => {

    const { addItem } = useContexto();

    const mostrarCantidad = (cantidad) => {
        addItem(producto, cantidad);
    }

    return (
        <div className="card col-lg-8">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={producto.img} className="rounded-start img-card" alt="grafica"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body bodyPosition">
                        <h5 className="card-title text-uppercase">{producto.marca} {producto.modelo}</h5>
                        <h1 className="card-text">${producto.precio}</h1>
                        <ItemCount stock={5} initial={1} onAdd={mostrarCantidad}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
