import React from 'react'
import {Button, MenuItem, Menu, Typography} from '@material-ui/core'
import {Link} from 'react-router-dom';
// import useStyles from './menu_styles'

const CategoriesMenu = () => {
  // const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return(
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      Product Range
      </Button>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
      <MenuItem component={Link} to="/products" onClick={handleClose}>All Products</MenuItem>
        <MenuItem component={Link} to="/products" onClick={handleClose}>Electrical</MenuItem>
        <MenuItem onClick={handleClose}>Plumbing</MenuItem>
        <MenuItem onClick={handleClose}>Bathroom Fittings</MenuItem>
        <MenuItem onClick={handleClose}>Handles and Locks</MenuItem>
        <MenuItem onClick={handleClose}>Faucets and mixers</MenuItem>
        <MenuItem onClick={handleClose}>Tiles and saniteryware</MenuItem>
      </Menu>
    </div>
  )
}
export default CategoriesMenu