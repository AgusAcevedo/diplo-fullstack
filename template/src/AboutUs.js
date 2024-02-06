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
        <div className="about-usagus">
            <section className="company-infoagus">
                <h1>Sobre nosotros</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                    culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>

            <hr className="section-divider" />

            <section className="staff-infoagus">
                <h2>Nuestro equipo</h2>
                <div className="staff-cardsagus">
                    {staffMembers.map((member, index) => (
                        <div className="staff-cardagus" key={index}>
                            <img className="staff-picagus" src={member.imgSrc} alt={member.name} />
                            <h3>{member.name}</h3>
                            <p>{member.info}</p>
                        </div>
                    ))}
                </div>
            </section>
            
            <hr className="section-divider" />

            <section className="history">
                <h2>Nuestra Historia</h2>
                <div className="timeline">
                    <div className="event">
                        <h3>1990</h3>
                        <p>Company was founded.</p>
                    </div>
                    <div className="event">
                        <h3>2000</h3>
                        <p>Reached our first 1000 customers.</p>
                    </div>
                    <div className="event">
                        <h3>2010</h3>
                        <p>Expanded our services worldwide.</p>
                    </div>
                    {/* Add more events as needed */}
                </div>
            </section>
        </div>
    );
}

export default AboutUsPage;