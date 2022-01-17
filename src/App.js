import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Items/ItemListContainer";
import ItemDetailContainer from "./components/Detail/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Carrito from "./components/Carrito/Carrito";
import Nosotros from "./components/Nosotros/Nosotros"
import Contacto from "./components/Contacto/Contacto"
import CustomProvider from "./components/Context/CartContext";

const App = () => {

    const links = [
        {id:1, name:"Productos", href:"/productos"},
        {id:2, name:"MSI", href:"/marca/msi"},
        {id:3, name:"PALIT", href:"/marca/palit"},
        {id:4, name:"ASUS", href:"/marca/asus"},
        {id:5, name:"Nosotros", href:"/nosotros"},
        {id:6, name:"Contacto", href:"/contacto"}
    ]


    return (
        <CustomProvider>
            <BrowserRouter>
                <NavBar links={links} />
                <main>
                    <Routes>
                        <Route path="/" element={<Home greeting={"Bienvenido a Solo Leveling Components"} />} /> 
                        <Route path="/productos" element={<ItemListContainer />} />
                        <Route path="/producto/:id" element={<ItemDetailContainer />} />
                        <Route path="/marca/:marca" element={<ItemListContainer />} />
                        <Route path="/nosotros" element={<Nosotros />} />
                        <Route path="/contacto" element={<Contacto />} />
                        <Route path="/carrito" element={<Carrito />} />
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </CustomProvider>
    );
}

export default App;