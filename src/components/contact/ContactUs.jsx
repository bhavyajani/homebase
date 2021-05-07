import React from 'react';
//import {Grid} from '@material-ui/core';
import useStyles from './contact_us_styles'

const ContactUS = () => {
  const classes = useStyles()
  return(
  <main>
    <div className={classes.content}>
      <h1>This will be my Contact US page</h1>
    </div>
  </main>
  )
}

export default ContactUS;