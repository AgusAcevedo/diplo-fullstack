import React from 'react';
import Handlebars from 'handlebars';

const source = `
<style>
.service-card {
    display: flex;
    border: 1px solid #BBE1FA;
    border-radius: 10px;
    padding: 20px;
    margin: 20px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    background-color: #1B262C;
    color: #BBE1FA;
  }
  .service-card img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 20px;
  }
  .service-card-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
.service-card h2 {
  margin: 0;
}
.service-card p {
  text-align: left;
}
</style>
<div class="service-card">
<img src="{{imgSrc}}" alt="{{title}}" />
<div class="service-card-content">
  <h2>{{title}}</h2>
  <p>{{description}}</p>
</div>
</div>
`;

const template = Handlebars.compile(source);

const services = [
    {
        title: 'Servicio 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        imgSrc: 'https://via.placeholder.com/150'
    },
    {
        title: 'Servicio 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        imgSrc: 'https://via.placeholder.com/150'
    },
    {
        title: 'Servicio 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        imgSrc: 'https://via.placeholder.com/150'
    },
];

const ServicesPage = () => {
  const renderedHTML = services.map(service => template(service)).join('');
  return <div dangerouslySetInnerHTML={{ __html: renderedHTML }} />;
};

export default ServicesPage;