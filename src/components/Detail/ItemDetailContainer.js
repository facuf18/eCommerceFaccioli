import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { dataBase } from "../../firebase"
import { collection, getDoc, doc } from "firebase/firestore"
import Loader from "../Loader/Loader"


const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {

        const itemsCollection = collection(dataBase, "productos");
        const consultaDoc = doc(itemsCollection, id);

        getDoc(consultaDoc)
            .then((res) => {
                setItem({id : res.id, ...res.data()});
            })
            .catch((error) => {
                console.log(error);
            })

    }, [id]);

    return (
        <>
        {item !== {} ? (
            <div className="container d-flex justify-content-center">
                <ItemDetail producto={item} />
            </div>
        ) : 
            <Loader />}
        </>
    )
}

export default ItemDetailContainer
