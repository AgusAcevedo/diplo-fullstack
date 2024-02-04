import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import HomePage from './HomePage';
import AboutUsPage from './AboutUs';
import ServicesPage from './Services'; // Import the ServicesPage component

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<AboutUsPage />} />
        <Route path="/servicios" element={<ServicesPage />} /> {/* Add a route for the ServicesPage */}
        {/* Agrega más rutas según sea necesario */}
      </Routes>
      <footer className="home-footer">
        <p>© 2024 Agustin Acevedo</p>
      </footer>
    </Router>
    
  );
}

export default App;