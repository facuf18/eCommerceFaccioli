import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Items/ItemListContainer";
import ItemDetailContainer from "./components/Detail/ItemDetailContainer";

const App = () => {
    return (
        <>
            <NavBar />
            <ItemListContainer greeting={"Bienvenido a Solo Leveling Components"} />
            <ItemDetailContainer />
        </>
    );
}

export default App;