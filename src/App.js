import NavBar from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/Items/ItemListContainer";

const App = () => {
    return (
        <>
            <NavBar/>
            <ItemListContainer greeting={"Bienvenido a Solo Leveling Components"}/>
        </>
    );
}

export default App;