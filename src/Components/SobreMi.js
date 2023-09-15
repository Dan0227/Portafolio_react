import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function SobreMi() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Acerca De Mí
      </Typography>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="body1">
          ¡Hola! Soy Jhojan Daniel Gomez Rojo, estoy iniciando en el mundo de la programacion. Mi objetivo es llegar a aprender de esto ara llegar a crear herramientas que gracias a mis otros estudios ayuden a las personas a manejar de mejor manera sus recursos .
        </Typography>
        <Typography variant="body1">
          En mi tiempo libre, disfruto cantar,tocar la guitarra y leer.
        </Typography>
      </Paper>
    </div>
  );
}

export default SobreMi;
