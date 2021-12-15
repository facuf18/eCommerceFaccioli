import { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const arrItems = [
    {
        id: 1,
        categoria: "Placa de Video",
        marca: "MSI",
        modelo: "GEFORCE GTX 1660 SUPER GAMING X",
        precio: 129999,
        img: "./public/img/msi1660super.png"
    },
    {
        id: 2,
        categoria: "Placa de Video",
        marca: "PALIT",
        modelo: "GEFORCE RTX 3060 TI DUAL 8GB",
        precio: 199999,
        img: "./public/img/palit3060ti.png"
    },
    {
        id: 3,
        categoria: "Placa de Video",
        marca: "PALIT",
        modelo: "GEFORCE RTX 3070 GAMING PRO 8GB",
        precio: 299999,
        img: "./public/img/palit3070.png"
    },
    {
        id: 4,
        categoria: "Placa de Video",
        marca: "MSI",
        modelo: "RADEON RX 6900 XT GAMING Z TRIO 16GB",
        precio: 328999,
        img: "./public/img/msirx6900.png"
    },
    {
        id: 5,
        categoria: "Placa de Video",
        marca: "MSI",
        modelo: "GEFORCE RTX 3080 VENTUS 3X 10GB",
        precio: 369999,
        img: "./public/img/msi3080ventus.png"
    }
]

const promesa = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(arrItems), 2000)
    })
}


const ItemListContainer = (props) => {

    const {greeting} = props;

    const mostrarCantidad = (cantidad) => {
        console.log(cantidad + " productos agregados al carrito");
    }

    const [items, setItems] = useState([]);

    useEffect(() => {
        promesa().then((data) => {
            setItems(data);
            console.log("todo ok")
        })
    }, []);

    return (
        <div className="container">
            <h1 className="text-center">{greeting}</h1>
            <ItemCount stock={5} initial={1} onAdd={mostrarCantidad}/>
            <ItemList productos={items}/>
        </div>
    )
}

export default ItemListContainer;