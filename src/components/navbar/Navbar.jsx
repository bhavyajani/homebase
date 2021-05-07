import React from 'react'
import {Button, AppBar, Toolbar, Typography} from '@material-ui/core'
import useStyles from './navbar_styles'
import logo from '../../assets/logo.jpg'
import CategoriesMenu from '../menus/CategoriesMenu'
import LocationsMenu from '../menus/LocationsMenu'
import AboutUsMenu from '../menus/AboutUsMenu'
import {Link} from 'react-router-dom'
import ContactUSMenu from '../menus/ContactUsMenu'

const Navbar = () => {
  const classes = useStyles()
  return(
    <div>
      <AppBar position="fixed" className = {classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="Home Base" height = "50px" className={classes.image}></img>
            Homebase
          </Typography> 
          <CategoriesMenu/>
          <LocationsMenu/>
          {/* <AboutUsMenu/>
          <ContactUSMenu/> */}
          <div className={classes.grow}></div>
          <div className={classes.button}>
            <Button aria-label="Login" variant="outlined" size="small">
              <Typography component={Link} to="/login" variant="body3" color="textPrimary">
                Login
              </Typography>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar