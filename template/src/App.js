import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import HomePage from './HomePage';
import AboutUsPage from './AboutUs';
import ServicesPage from './Services';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import NovedadesPage from './NovedadesPage';
import { AuthProvider, useAuth } from './AuthProvider';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nosotros" element={<AboutUsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/novedades" element={<PrivateRoute><NovedadesPage /></PrivateRoute>} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
        <footer className="home-footer">
          <p>© 2024 Agustin Acevedo</p>
        </footer>
      </Router>
    </AuthProvider>
  );
}

function PrivateRoute({ children }) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" />;
}

export default App;