import React from 'react';
import './HomePage.css'; // Import the CSS file

const HomePage = () => {
    return (
        <div className="home">
            <header className="home-header">
                <h1>Bienvenido a mi tienda en línea</h1>
                <p>La mejor tienda para tus necesidades</p>
            </header>

            <main className="home-main">
                <h2>Categorías de productos</h2>
                <div className="home-categories">
                    <div className="home-category">
                        <img src="https://via.placeholder.com/150" alt="Categoría 1" />
                        <h3>Categoría 1</h3>
                        <p>Descripción de la categoría 1</p>
                    </div>
                    {/* Add more categories as needed */}
                </div>
            </main>

            
        </div>
    );
}

export default HomePage;