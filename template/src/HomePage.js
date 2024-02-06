import React from 'react';
import './HomePage.css';
import Carousel from 'react-bootstrap/Carousel';

const HomePage = () => {
    return (
        <div className="home">
            <header className="home-header">
                <h1>Nombre de la Empresa</h1>
                <p>Bienvenido a nuestra pagina web</p>
            </header>
            
            <main className="home-main">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://via.placeholder.com/800x400"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://via.placeholder.com/800x400"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* Add more Carousel.Item as needed */}
                </Carousel>

                <hr className="section-divider" />

                <section className="home-section">
                    <h2>Section Title</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                        culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </section>
                
                <hr className="section-divider" />

                <section className="home-section">
                    <h2>Empresas Partners</h2>
                    <div className="logos">
                        <img src="https://via.placeholder.com/150" alt="Company 1" />
                        <img src="https://via.placeholder.com/150" alt="Company 2" />
                        <img src="https://via.placeholder.com/150" alt="Company 3" />
                        <img src="https://via.placeholder.com/150" alt="Company 4" />
                        <img src="https://via.placeholder.com/150" alt="Company 5" />
                        {/* Add more images as needed */}
                    </div>
                </section>

            </main>
        </div>
    );
}
export default HomePage;