import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import './Inicio.css'

function Contacto() {
  return (
    <div className="inicio-container">
      <Typography variant="h4" gutterBottom>
        Contáctame
      </Typography>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="body1">
          Si deseas ponerse en contacto conmigo, puedes hacerlo a través de los siguientes medios:
        </Typography>
        <ul>
          <li>Email: jhojan0227@gmail.com</li>
          <li>Teléfono: +57 311 686 93 07</li>
        </ul>
      </Paper>
    </div>
  );
}

export default Contacto;