import React from 'react'
import {Button, Menu, Typography} from '@material-ui/core'
import {Link} from 'react-router-dom';
// import useStyles from './menu_styles'

const ContactUSMenu = () => {
  // const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return(
    <div>
      <Button component={Link} to="/contact_us" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      Contact US
      </Button>
        <Menu id="simple-menu">
      </Menu>
    </div>
  )
}
export default ContactUSMenu