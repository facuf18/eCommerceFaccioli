import { CartWidget } from "./CartWidget";
import "./navbar.css"
import { NavLink } from "react-router-dom";

const NavBar = ({links}) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <NavLink to="/">
                    <img src="/logoColor.png" width="130" height="auto" className="d-inline-block align-center" alt="logo"/>
                </NavLink>
                <div className="navbar-nav nav">
                    {links.map((link) => {
                        return <NavLink key={link.id} to={link.href} className="nav-link linkNav">{link.name}</NavLink>
                    })}
                    <NavLink className="linkNav" to="/carrito">
                        <CartWidget/>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;