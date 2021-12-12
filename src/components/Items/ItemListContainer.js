import { ItemCount } from "./ItemCount";

export const ItemListContainer = (props) => {

    const {greeting} = props;

    const mostrarCantidad = () => {
        console.log("Productos agregados al carrito")
    }

    return (
        <>
            <h1 className="text-center">{greeting}</h1>
            <ItemCount stock={5} initial={1} onAdd={mostrarCantidad}/>
        </>
    )
}
