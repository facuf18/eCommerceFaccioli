const Item = ({producto}) => {
    return (
        <div className="card m-2 border">
            <img src={producto.img} className="card-img-top" alt="grafica"></img>
            <div className="card-body">
                <p className="card-title">{producto.categoria} {producto.marca} {producto.modelo}</p>
                <h3 className="card-text">${producto.precio}</h3>
                <a href="." className="card-link">Ver detalles</a>
            </div>
        </div>
    )
}

export default Item