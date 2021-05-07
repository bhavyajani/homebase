import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './product/Product'
import useStyles from './products_styles'
import Carousel from 'react-material-ui-carousel'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import CarouselItem from '../utils/CarouselItem'

const product_banners = [
  {id:1, image: "images/products/banners/electrical/wires.jpg"},
  {id:2, image: "images/products/banners/handles_and_locks/locks.jpg"}
]

const products = [
  {id:1, name: "Tap", description: "stainless steel tap", price: '$500', image: "images/products/tresco/tap.jpg"},
  {id:2, name: "Faucet", description: "Brass Faucet", price: '$200', image: "images/products/tresco/faucet.jpg"},
  {id:3, name: "Glass", description: "Brass Faucet", price: '$200', image: "images/products/tresco/faucet.jpg"},
  {id:4, name: "Faucet", description: "Brass Faucet", price: '$200', image: "images/products/tresco/faucet.jpg"},
  {id:5, name: "Faucet", description: "Brass Faucet", price: '$200', image: "images/products/tresco/faucet.jpg"}
]

const Products = () => {
  const classes = useStyles()
  return(
  <main className={classes.main}>
    <Carousel className={classes.carousal} next={ () => {} } prev={ () => {} } 
    navButtonsAlwaysVisible NextIcon={<ArrowForwardIosRoundedIcon/>} 
    PrevIcon={<ArrowBackIosRoundedIcon/>}>
      {
          product_banners.map( (item, i) => <CarouselItem key={i} item={item} /> )
      }
    </Carousel>
    <div className={classes.content}>
      <Grid container justify="left" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product = {product}/>
          </Grid>
        ))}
      </Grid>
      </div>
  </main>
  )
}

export default Products;