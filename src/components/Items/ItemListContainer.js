import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const arrItems = [
    {
        id: 1,
        categoria: "Placa de Video",
        marca: "msi",
        modelo: "GEFORCE GTX 1660 SUPER GAMING X",
        precio: 129999,
        img: "https://i.postimg.cc/YjJNG1S5/msi1660super.jpg"
    },
    {
        id: 2,
        categoria: "Placa de Video",
        marca: "palit",
        modelo: "GEFORCE RTX 3060 TI DUAL 8GB",
        precio: 199999,
        img: "https://i.postimg.cc/vD6fscv3/palit3060ti.jpg"
    },
    {
        id: 3,
        categoria: "Placa de Video",
        marca: "palit",
        modelo: "GEFORCE RTX 3070 GAMING PRO 8GB",
        precio: 299999,
        img: "https://i.postimg.cc/KRSLvxqF/palit3070.jpg"
    },
    {
        id: 4,
        categoria: "Placa de Video",
        marca: "msi",
        modelo: "GEFORCE RTX 3080 VENTUS 3X 10GB",
        precio: 369999,
        img: "https://i.postimg.cc/Pp0DDjdW/msi3080ventus.jpg"
    }
]

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const { marca } = useParams();
    
    const filtrarItems = (marca) => {
        if(marca !== undefined){
            
        const items = arrItems.filter(e => e.marca === marca)

        return new Promise((resolve) => {
        setTimeout(() => resolve(items), 2000)
    })} else {

        return new Promise((resolve) => {
        setTimeout(() => resolve(arrItems), 2000)
    })}
    }

    useEffect(() => {
        filtrarItems(marca).then((data) => {
            setItems(data);
            console.log("todo ok")
        })
    }, [marca]);

    return (
        <div className="container">
            <ItemList productos={items}/>
        </div>
    )
}

export default ItemListContainer;