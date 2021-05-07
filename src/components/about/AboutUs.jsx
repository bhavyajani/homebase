import React from 'react';
//import {Grid} from '@material-ui/core';
import useStyles from './about_us_styles'

const AboutUs = () => {
  const classes = useStyles()
  return(
  <main>
    <div className={classes.content}>
      <h1>Who we are</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
        Aldus PageMaker including versions of Lorem Ipsum.</p>
      <h1>Corporate Overview</h1>
      <p>show company brochure here</p>
      <h1>Our reach in Ghana</h1>
      <p>vendor cards will come here redirecting to vendors page</p>
    </div>
  </main>
  )
}

export default AboutUs;