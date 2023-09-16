import React, { useState, useEffect } from "react";
import './Proyectos.css'

const proyectosData = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Biblioteca-montserrat.jpg/1200px-Biblioteca-montserrat.jpg",
    descripcion: "El CRUD para una biblioteca",
    repoUrl: "https://github.com/Dan0227/Libreria_crud_F"
  },
  {
    img: "https://webley.files.wordpress.com/2018/08/img_7190.jpg",
    descripcion: "Este portafolio",
    repoUrl: "https://github.com/Dan0227/Portafolio_react"
  },
  {
    img: "https://ps.w.org/b-slider/assets/icon-128x128.png?rev=2785255",
    descripcion: "Un slider",
    repoUrl: "https://github.com/Dan0227/slider"
  }
];

const Proyectos = ({ contador, setContador }) => {
  const [proyectoActual, setProyectoActual] = useState(proyectosData[contador - 1]);

  useEffect(() => {
    setProyectoActual(proyectosData[contador - 1]);
  }, [contador]);

  const maxContador = proyectosData.length;

  const handleIzquierda = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      setContador(maxContador);
    }
  };

  const handleDerecha = () => {
    if (contador < maxContador) {
      setContador(contador + 1);
    } else {
      setContador(1);
    }
  };

  return (
    <div className="">
      <div className="proyecto-container">
        <div className="proyecto-info">
          <img src={proyectoActual.img} className="img" alt={`Proyecto ${contador}`} />
        </div>
        <div className="proyecto-description">
          <p>{proyectoActual.descripcion}</p>
          <a className="linkk"href={proyectoActual.repoUrl} target="_blank" rel="noopener noreferrer">
            Ver Repositorio en GitHub
          </a>
        </div>
      </div>
      <div className="proyecto-buttons">
        <button className="izquierda" onClick={handleIzquierda}>←</button>
        <button className="derecha" onClick={handleDerecha}>→</button>
      </div>
    </div>
  )
}

export default Proyectos;