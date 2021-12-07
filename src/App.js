import NavBar from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";

const App = () => {
    return (
        <>
            <NavBar/>
            <ItemListContainer greeting={"Bienvenido a Solo Leveling Components"}/>
        </>
    );
}

export default App;