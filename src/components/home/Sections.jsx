import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import Section from './Section'
import useStyles from './sections_styles'

const products = [
  {id:1, name: "Tap", description: "stainless steel tap", price: '$500', image: "images/products/tresco/tap.jpg"},
  {id:2, name: "Faucet", description: "Brass Faucet", price: '$200', image: "images/products/tresco/faucet.jpg"},
  {id:3, name: "Glass", description: "Brass Faucet", price: '$200', image: "images/products/tresco/faucet.jpg"},
  {id:4, name: "Faucet", description: "Brass Faucet", price: '$200', image: "images/products/tresco/faucet.jpg"},
  {id:5, name: "Faucet", description: "Brass Faucet", price: '$200', image: "images/products/tresco/faucet.jpg"}
]

const Sections = () => {
  const classes = useStyles()
  return(
  <main className={classes.main}>
    <div className={classes.content}>
    <Typography variant="h5" align="center">
      Our Vendors
    </Typography>
      <Grid container justify="left" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Section product = {product}/>
          </Grid>
        ))}
      </Grid>
      </div>
  </main>
  )
}

export default Sections;