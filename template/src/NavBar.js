import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Importa el archivo CSS

const NavBar = () => {
    return (
        <nav className="navbaragus">
            <Link className="nav-linkagus" to="/">Inicio</Link>
            <Link className="nav-linkagus" to="/servicios">Servicios</Link>
            <Link className="nav-linkagus" to="/nosotros">Nosotros</Link>
            <Link className="nav-linkagus" to="/novedades">Novedades</Link>
            <Link className="nav-linkagus" to="/contacto">Contacto</Link>
        </nav>
    );
}

export default NavBar;