import React from "react";
import Drop_d from "./Drop_d";

const Encabezado = () => {
  return(
  <header className="Enc">
    <table>
      <tr>
        <th>
          <h1 className="letra">D</h1>
        </th>
        <th>
          <div className="ml1">
            <a className="texthe" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">MI HISTORIA</a>
          </div>
        </th>
        <th>
          <div className="ml2">
            <a className="texthe" href="https://www.amazon.com/-/es/Frank-Herbert/dp/849759682X" target="_blank">LIBRO</a>
          </div>
        </th>
        <th>
          <div className="ml2">
            <a className="texthe" href="https://github.com/Dan0227?tab=repositories  " target="_blank">PORTAFOLIO</a>
          </div>
        </th>
          <div>
            <Drop_d/>
          </div>
      </tr>
    </table>
  </header>
  )
}

export default Encabezado