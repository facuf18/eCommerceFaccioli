import Item from "./Item";

const ItemList = ({productos}) => {

    return (
        <div className="row">
            <div className="card-group">
            {productos.map((producto) => {
                return <Item key={producto.id} producto={producto}/>;
            })} 
            </div>   
        </div>
    );
}

export default ItemList;