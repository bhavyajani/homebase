import React from 'react'
import {Button, MenuItem, Menu, Typography} from '@material-ui/core'
// import useStyles from './menu_styles'

const LocationsMenu = () => {
  // const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Locations
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>All Locations</MenuItem>
        <MenuItem onClick={handleClose}>Accra</MenuItem>
        <MenuItem onClick={handleClose}>Kumasi</MenuItem>
        <MenuItem onClick={handleClose}>Tema</MenuItem>
      </Menu>
    </div>
  );
}
export default LocationsMenu