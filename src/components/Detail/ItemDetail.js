import ItemCount from "../Items/ItemCount"

const ItemDetail = ({producto}) => {

    const mostrarCantidad = (cantidad) => {
        console.log(cantidad + " productos agregados al carrito");
    }

    return (
        <div className="card col-lg-8">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={producto.img} className="img-fluid rounded-start" alt="grafica"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{producto.categoria}</h5>
                        <h5 className="card-title">{producto.marca} {producto.modelo}</h5>
                        <h1 className="card-text">${producto.precio}</h1>
                        <ItemCount stock={5} initial={1} onAdd={mostrarCantidad}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
