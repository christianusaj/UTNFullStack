import React from "react";
import { Link } from "react-router-dom";

const Nav=(props) => {
    return(
        <nav>
        <ol>
            <li><Link to="/">Inicio </Link></li>
            <li><Link to="/noticias">Noticias</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/galeria">Galería</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
        </ol>
        </nav>
    )
}
export default Nav;