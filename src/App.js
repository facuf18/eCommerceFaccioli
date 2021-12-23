import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Items/ItemListContainer";
import ItemDetailContainer from "./components/Detail/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Carrito from "./components/Carrito/Carrito";
import Nosotros from "./components/Nosotros/Nosotros"
import Contacto from "./components/Contacto/Contacto"

const App = () => {

    const links = [
        {id:1, name:"Productos", href:"/productos"},
        {id:2, name:"Nosotros", href:"/nosotros"},
        {id:3, name:"Contacto", href:"/contacto"}
    ]


    return (
        <BrowserRouter>
            <NavBar links={links} />
            <main>
                <Routes>
                    <Route path="/" element={<Home greeting={"Bienvenido a Solo Leveling Components"} />} /> 
                    <Route path="/productos" element={<ItemListContainer />} />
                    <Route path="/producto/:id" element={<ItemDetailContainer />} />
                    <Route path="/nosotros" element={<Nosotros />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/carrito" element={<Carrito />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;