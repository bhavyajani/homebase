import React from 'react'
import {Button, Menu, Typography} from '@material-ui/core'
import {Link} from 'react-router-dom';
// import useStyles from './menu_styles'

const AboutUsMenu = () => {
  // const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return(
    <div>
      <Button component={Link} to="/about_us" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      About US
      </Button>
        <Menu id="simple-menu">
      </Menu>
    </div>
  )
}
export default AboutUsMenu