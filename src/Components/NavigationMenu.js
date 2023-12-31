import React from 'react';
import './NavegationMenu.css'

function NavigationMenu({ handlePage }) {
  return (
    <header className="Enc">
    <table>
      <tr>
        <th>
          <h1 className="letra">D</h1>
        </th>
        <th>
            <div className="ml2">
                <a className="a2" href="#" onClick={() => handlePage('inicio')}>
                    Inicio
                </a>
            </div>
        </th>
        <th>
            <div className="ml2">
              <a className="a2" href="#" onClick={() => handlePage('proyectos')}>
                Proyectos
              </a>
            </div>
        </th>
        <th>
            <div className="ml2">
                <a className="a2" href="#" onClick={() => handlePage('SobreMi')}>
                    Acerca de
                </a>
            </div>
        </th>
        <th>
            <div className="ml2">
                <a className="a2" href="#" onClick={() => handlePage('contacto')}>
                    Contacto
                </a>
            </div>
        </th>
      </tr>
    </table>
  </header>
);
}

export default NavigationMenu;