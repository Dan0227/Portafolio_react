import './App.css';
import NavigationMenu from './Components/NavigationMenu';
import Inicio from './Components/Inicio';
import Proyectos from './Components/Proyectos';
import SobreMi from './Components/SobreMi';
import Contacto from './Components/Contacto';
import React, { useState } from 'react';


function App() {
  const [currentPage, setCurrentPage] = useState('inicio');

  const handlePage = (page) => {
    setCurrentPage(page);
  };

  // Renderizar la sección actual según el valor de currentPage
  let currentSection;
  switch (currentPage) {
    case 'inicio':
      currentSection = <Inicio />;
      break;
    case 'proyectos':
      currentSection = <Proyectos />;
      break;
    case 'acercaDe':
      currentSection = <SobreMi />;
      break;
    case 'contacto':
      currentSection = <Contacto />;
      break;
    default:
      currentSection = <Inicio />;
  }

  return (
    <div>
      <NavigationMenu handlePage={handlePage} />
      {currentSection}
    </div>
  );
}

export default App;