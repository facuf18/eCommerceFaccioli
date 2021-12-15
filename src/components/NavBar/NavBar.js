import { CartWidget } from "./CartWidget";
import "../../css/navbar.css";

const NavBar = () => {
    return (
        <nav className="navbar navbar-light navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand tituloCommerce" href="index.html">
                    <img src="/logoColor.png" width="130" height="auto" className="d-inline-block align-center" alt="logo"/>
                </a>
                <div className="navbar-nav">
                    <a href="." className="nav-link">Procesadores</a>
                    <a href="." className="nav-link">Motherboards</a>
                    <a href="." className="nav-link">Memorias Ram</a>
                    <a href="." className="nav-link">Almacenamiento</a>
                    <a href="." className="nav-link">Placas de video</a>
                </div>
                <CartWidget/>
            </div>
        </nav>
    );
}

export default NavBar;