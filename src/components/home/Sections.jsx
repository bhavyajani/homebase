import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import Section from './Section'
import useStyles from './sections_styles'
import './section_styles.css'
import Carousel from 'react-material-ui-carousel'
import {Button} from '@material-ui/core';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

const products = [
  {id:1, name: "Tresco", image: "images/home/manufacturers/tresco.jpg"},
  {id:2, name: "Faucet", image: "images/products/tresco/faucet.jpg"},
  {id:3, name: "Glass", image: "images/products/tresco/faucet.jpg"},
  {id:4, name: "Faucet", image: "images/products/tresco/faucet.jpg"},
  {id:5, name: "Faucet", image: "images/products/tresco/faucet.jpg"},
  {id:6, name: "Glass", image: "images/products/tresco/faucet.jpg"},
  {id:7, name: "Faucet", image: "images/products/tresco/faucet.jpg"},
  {id:8, name: "Faucet", image: "images/products/tresco/faucet.jpg"},
  {id:9, name: "Glass", image: "images/products/tresco/faucet.jpg"},
  {id:10, name: "Faucet", image: "images/products/tresco/faucet.jpg"},
  {id:11, name: "Faucet", image: "images/products/tresco/faucet.jpg"}
]

const Sections = () => {
  const classes = useStyles()
  //const  = ()
  return(
  <main className={classes.main}>
    <div className={classes.content}>
    <Typography variant="h5" align="center">
      Our Vendors
    </Typography>
    <div className={classes.spacing }/>
      <div className={classes.sectionContainer}>
          <Button>
            <ArrowBackIosRoundedIcon></ArrowBackIosRoundedIcon>
          </Button>
          <div className={'sections'}>
            {products.map((product) => (
            <Section product = {product}/>
            ))}
          </div>
          <Button>
            <ArrowForwardIosRoundedIcon></ArrowForwardIosRoundedIcon>
          </Button>
      </div>
    </div>
  </main>
  )
}

export default Sections;