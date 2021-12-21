import { useState, useEffect } from "react";
import ItemList from "./ItemList";

const arrItems = [
    {
        id: 1,
        categoria: "Placa de Video",
        marca: "MSI",
        modelo: "GEFORCE GTX 1660 SUPER GAMING X",
        precio: 129999,
        img: "https://i.postimg.cc/YjJNG1S5/msi1660super.jpg"
    },
    {
        id: 2,
        categoria: "Placa de Video",
        marca: "PALIT",
        modelo: "GEFORCE RTX 3060 TI DUAL 8GB",
        precio: 199999,
        img: "https://i.postimg.cc/vD6fscv3/palit3060ti.jpg"
    },
    {
        id: 3,
        categoria: "Placa de Video",
        marca: "PALIT",
        modelo: "GEFORCE RTX 3070 GAMING PRO 8GB",
        precio: 299999,
        img: "https://i.postimg.cc/KRSLvxqF/palit3070.jpg"
    },
    {
        id: 4,
        categoria: "Placa de Video",
        marca: "MSI",
        modelo: "RADEON RX 6900 XT GAMING Z TRIO 16GB",
        precio: 328999,
        img: "https://i.postimg.cc/Z9MvkSBG/msirx6900.png"
    },
    {
        id: 5,
        categoria: "Placa de Video",
        marca: "MSI",
        modelo: "GEFORCE RTX 3080 VENTUS 3X 10GB",
        precio: 369999,
        img: "https://i.postimg.cc/Pp0DDjdW/msi3080ventus.jpg"
    }
]

const promesa = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(arrItems), 2000)
    })
}


const ItemListContainer = (props) => {

    const {greeting} = props;

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
            <ItemList productos={items}/>
        </div>
    )
}

export default ItemListContainer;