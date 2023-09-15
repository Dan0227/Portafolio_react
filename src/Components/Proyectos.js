import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const proyectos = [
  {
    id: 1,
    titulo: 'Proyecto 1',
    descripcion: 'Descripción del Proyecto 1',
    imagen: 'imagen1.jpg',
  },
  {
    id: 2,
    titulo: 'Proyecto 2',
    descripcion: 'Descripción del Proyecto 2',
    imagen: 'imagen2.jpg',
  },
  {
    id: 3,
    titulo: 'Proyecto 3',
    descripcion: 'Descripción del Proyecto 3',
    imagen: 'imagen3.jpg',
  },
  // Agrega más proyectos según sea necesario
];

const Proyectos = () => {
  return (
    <div className="proyectos-slider">
      <h2>Proyectos Destacados</h2>
      <Carousel>
        {proyectos.map((proyecto) => (
          <div key={proyecto.id}>
            <img src={proyecto.imagen} alt={proyecto.titulo} />
            <p>{proyecto.titulo}</p>
            <p>{proyecto.descripcion}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Proyectos;