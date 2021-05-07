import React from 'react';
//import {Grid} from '@material-ui/core';
import useStyles from './loginpage_styles'

const Loginpage = () => {
  const classes = useStyles()
  return(
  <main>
    <div className={classes.content}>
      <h1>This will be my Login page</h1>
    </div>
  </main>
  )
}

export default Loginpage;