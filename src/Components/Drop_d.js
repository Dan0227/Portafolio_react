import React from 'react'
import { Button, Menu, MenuItem } from '@mui/material';
import './Drop_d.css';

const Drop_d = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div className='ml'>
        <Button onClick={handleClick}><b className= 'le'>Contacto</b></Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem>Correo: Jhojan0227@gmail.com</MenuItem>
          <MenuItem>Telefono: +57 311 686 93 07</MenuItem>
        </Menu>
      </div>
    );
}

export default Drop_d