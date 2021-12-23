import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

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
        modelo: "GEFORCE RTX 3080 VENTUS 3X 10GB",
        precio: 369999,
        img: "https://i.postimg.cc/Pp0DDjdW/msi3080ventus.jpg"
    }
]

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({});
    const { id } = useParams();

    const getItem = (id) => {

        const item = arrItems.find(item => (item.id).toString() === id) 
        
        return new Promise((resolve) => {
        setTimeout(() => resolve(item), 2000)
    })
}

    useEffect(() => {
        getItem(id).then((data) => {
            setProducto(data);
            console.log("todo ok")
        })
    }, [id]);

    console.log(producto)
    return (
        <div className="container d-flex justify-content-center">
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer
