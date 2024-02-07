import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from './AuthProvider'; // Import your AuthContext
import { useNavigate } from 'react-router-dom';
import './NovedadesPage.css';

function NovedadesPage() {
  const { user, deleteUser } = useContext(AuthContext); // Access the current user's data and the deleteUser function
  const [setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const [novedades, setNovedades] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [titulo, setTitulo] = useState('');
  const [subtitulo, setSubtitulo] = useState('');
  const [cuerpo, setCuerpo] = useState('');
  const [editingNovedad, setEditingNovedad] = useState(null);
  const [editedTitulo, setEditedTitulo] = useState('');
  const [editedSubtitulo, setEditedSubtitulo] = useState('');
  const [editedCuerpo, setEditedCuerpo] = useState('');


  const fetchNovedades = async () => {
    try {
      const response = await fetch('http://localhost:8000/novedades');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Novedades:', data);
      setNovedades(data);
    } catch (error) {
      console.error('Fetching novedades failed:', error);
      setErrorMessage(error.message);
    }
  };

  const addNovedad = async () => {
    setTitulo('');
    setSubtitulo('');
    setCuerpo('');
    setShowForm(true);
  };
  
  const confirmNovedad = () => {
    fetch('http://localhost:8000/novedades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ titulo, subtitulo, cuerpo }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          console.log('Novedad added:', data.message);
          setNovedades(prevNovedades => [{ titulo, subtitulo, cuerpo }, ...prevNovedades]);
        } else {
          console.error('Failed to add novedad:', data.message);
        }
        setShowForm(false);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const deleteNovedad = async (id) => {
    const response = await fetch(`http://localhost:8000/novedades/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      fetchNovedades();
    }
  };
  
  const editNovedad = async (id, updatedNovedad) => {
    const response = await fetch(`http://localhost:8000/novedades/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedNovedad),
    });
    if (response.ok) {
      fetchNovedades();
    }
  };

  const startEditing = (novedad) => {
    setEditingNovedad(novedad.id);
    setEditedTitulo(novedad.titulo);
    setEditedSubtitulo(novedad.subtitulo);
    setEditedCuerpo(novedad.cuerpo);
  };
  
  const confirmEdit = async () => {
    await editNovedad(editingNovedad, {
      titulo: editedTitulo,
      subtitulo: editedSubtitulo,
      cuerpo: editedCuerpo,
    });
    setEditingNovedad(null);
  };

  useEffect(() => {
    fetchNovedades();
  }, []);

  const handleDeleteUser = async () => {
    const deleteSuccessful = await deleteUser(user.user.username); // Delete the current user
    if (deleteSuccessful) {
      navigate('/login'); // Navigate to the login page
    } else {
  
    }
  };
  console.log(user.user.username);

  return (
    <div className="novedades-container">
    {user ? (
      <>
        <p className="novedades-paragraph">Estas logueado como {user.user.username}, ({user.user.email})</p>
        <button className="logout-button" onClick={logout}>Logout</button>
        <button className="delete-button" onClick={handleDeleteUser}>Delete User</button>
        {user && user.user && user.user.isAdmin === 1 && <button className="add-novedad-button" onClick={addNovedad}>Add Novedad</button>}
        {showForm && (
          <div className="novedad-form">
            <input type="text" value={titulo} onChange={e => setTitulo(e.target.value)} placeholder="Titulo" />
            <input type="text" value={subtitulo} onChange={e => setSubtitulo(e.target.value)} placeholder="Subtitulo" />
            <textarea value={cuerpo} onChange={e => setCuerpo(e.target.value)} placeholder="Cuerpo" />
            <button onClick={confirmNovedad}>Confirm</button>
          </div>
        )}
        {novedades.map((novedad) => (
          <div className="novedad" key={novedad.id}>
            {editingNovedad === novedad.id ? (
              <>
                <input value={editedTitulo} onChange={(e) => setEditedTitulo(e.target.value)} />
                <input value={editedSubtitulo} onChange={(e) => setEditedSubtitulo(e.target.value)} />
                <input value={editedCuerpo} onChange={(e) => setEditedCuerpo(e.target.value)} />
                <button onClick={confirmEdit}>Confirm</button>
              </>
            ) : (
              <>
                <h2>{novedad.titulo}</h2>
                <h3>{novedad.subtitulo}</h3>
                <p>{novedad.cuerpo}</p>
                {user && user.user && user.user.isAdmin === 1 && (
                  <div>
                    <button className="add-novedad-button" onClick={() => startEditing(novedad)}>Edit</button>
                    <button className="delete-button" onClick={() => deleteNovedad(novedad.id)}>Delete</button>
                  </div>
                )}
               </>
            )}
          </div>
        ))}
      </>
    ) : (
      <p>Loading...</p>
    )}
  </div>
  );
}

export default NovedadesPage;