import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const { Provider } = CartContext;

export const useContexto = () => {
    return useContext(CartContext);
}

const CustomProvider = ({children}) => {

    const [cantidadTotal, setCantidadTotal] = useState(0);
    const [carrito, setCarrito] = useState([]);

    const isInCart = (id) => {
        return carrito.some(item => item.id === id);
    }

    const addItem = (item, cantidad) => {
        if(isInCart(item.id)){
            console.log(isInCart(item.id))
            console.log("El producto ya fue agregado")

        } else{
            const copiaItem = {...item}
            copiaItem.cantidad = cantidad;
            setCantidadTotal(cantidad)

            const copia = [...carrito, copiaItem];
            setCarrito(copia); 
        }
    }

    const removeItem = (id) => {
        setCarrito(carrito.filter(item => item.id !== id));
    }

    const clear = () => {
        setCarrito([]);
    }

    const valorDelContexto = {
        cantidadTotal,
        carrito,
        addItem,
        removeItem,
        clear
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider;