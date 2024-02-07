import React, { useState } from 'react';
import "./ContactPage.css";

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:8000/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      alert('Message sent successfully');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      alert('An error occurred');
    }
  };

  return (
    <div className="contact-form">
      <div className="contact-card">
        <h1>Contacto</h1>
        <p>Por favor, rellene el siguiente formulario para ponerse en contacto con nosotros:</p>
        <form onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Nombre" required />
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Correo electrónico" required />
          <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Mensaje" required />
          <button type="submit">Enviar</button>
        </form>
      </div>
      
        <div className="location">
            
            <iframe title="Mapa Ubicacion" className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12993872.602084482!2d-139.9386595!3d37.334643800000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb596e9e188fd%3A0x3b0d8391510688f0!2sApple%20Park!5e0!3m2!1ses!2sar!4v1707272646549!5m2!1ses!2sar" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            
            <div className="contact-info">
                <p>Address: 123 Main St, City, State, ZIP</p>
                <p>Phone: (123) 456-7890</p>
                <hr />
                <div className="social-media">
                <p>O contáctenos a través de nuestras redes sociales</p>
                <div className="social-media-icons">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-square"></i>
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter-square"></i>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram-square"></i>
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                    </a>
                </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ContactPage;