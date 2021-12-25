import { Link } from "react-router-dom"
import "./item.css"

const Item = ({producto}) => {
    return (
        <div className="card border">
            <img src={producto.img} className="card-img-top w-100" alt="grafica"></img>
            <div className="card-body">
                <p className="card-title">{producto.categoria} {producto.marca} {producto.modelo}</p>
                <h3 className="card-text">${producto.precio}</h3>
                <Link className="card-link" to={`/producto/${producto.id}`}>Ver detalles</Link>
            </div>
        </div>
    )
}

export default Item