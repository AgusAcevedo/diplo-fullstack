import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Importa el archivo CSS

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link className="nav-link" to="/">Inicio</Link>
            <Link className="nav-link" to="/servicios">Servicios</Link>
            <Link className="nav-link" to="/nosotros">Nosotros</Link>
            <Link className="nav-link" to="/novedades">Novedades</Link>
            <Link className="nav-link" to="/contacto">Contacto</Link>
        </nav>
    );
}

export default NavBar;