import React from 'react';
import useStyles from './section_styles'
import {Card, CardMedia, CardContent, CardActions, Typography, Button} from '@material-ui/core'


const Section = ({product}) => {
  const classes = useStyles()
  return(
  <main className={classes.main}>
    <Card className = {classes.root}>
      <CardMedia className = {classes.media} image={product.image} title = {product.name}/>
      <CardContent>
        <div className = {classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">
            {product.price}
          </Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
            {product.description}
          </Typography>
          <CardActions disableSpacing className={classes.cardActions}>
            <Button aria-label="View Details" variant="outlined" size="small">
              <Typography variant="body3" color="textPrimary">
                View Details
              </Typography>
            </Button>
          </CardActions>
      </CardContent>
    </Card>
  </main>
  )
}

export default Section;