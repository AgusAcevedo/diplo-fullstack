import React from 'react';
import './AboutUs.css'; 

const staffMembers = [
    {
        name: 'Nombre del miembro del equipo 1',
        info: 'Información sobre el miembro del equipo 1...',
        imgSrc: 'https://via.placeholder.com/150'
    },
    {
        name: 'Nombre del miembro del equipo 2',
        info: 'Información sobre el miembro del equipo 2...',
        imgSrc: 'https://via.placeholder.com/150'
    },
    {
        name: 'Nombre del miembro del equipo 3',
        info: 'Información sobre el miembro del equipo 3...',
        imgSrc: 'https://via.placeholder.com/150'
    },
    {
        name: 'Nombre del miembro del equipo 4',
        info: 'Información sobre el miembro del equipo 4...',
        imgSrc: 'https://via.placeholder.com/150'
    },
    {
        name: 'Nombre del miembro del equipo 5',
        info: 'Información sobre el miembro del equipo 5...',
        imgSrc: 'https://via.placeholder.com/150'
    },
    // Add more staff members as needed
];

const AboutUsPage = () => {
    return (
        <div className="about-us">
            <section className="company-info">
                <h1>Sobre nosotros</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                    culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>

            <section className="staff-info">
                <h2>Nuestro equipo</h2>
                <div className="staff-cards">
                    {staffMembers.map((member, index) => (
                        <div className="staff-card" key={index}>
                            <img src={member.imgSrc} alt={member.name} />
                            <h3>{member.name}</h3>
                            <p>{member.info}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default AboutUsPage;