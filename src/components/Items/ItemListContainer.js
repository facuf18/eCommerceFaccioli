import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { dataBase } from "../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import Loader from "../Loader/Loader";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const { marca } = useParams();

    useEffect(() => {

        const itemsCollection = collection(dataBase, "productos"); 

        if (marca) {

            const consulta = query(itemsCollection, where("marca", "==", marca));

            getDocs(consulta)
            .then(({ docs }) => {
                setItems(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            })
            .catch((error) =>{
                console.log(error);
            })

        } else {

             getDocs(itemsCollection)
            .then(({ docs }) => {
                setItems(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            })
            .catch((error) =>{
                console.log(error);
            }) 
        }

    }, [marca])


    return (
        <>
        {items.length > 0 ? (
            <div className="container mb-5">
                <ItemList productos={items}/>
            </div>
        ) : 
            <Loader />}
        </>
    )
}

export default ItemListContainer;