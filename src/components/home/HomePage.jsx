import React from 'react';
import Carousel from 'react-material-ui-carousel'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import useStyles from './homepage_styles'
import CarouselItem from '../utils/CarouselItem'
import Sections from './Sections'
const items = [
  {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      image: "images/home/banner/house.jpg"
  },
  {
      name: "Random Name #2",
      description: "Hello World!",
      image: "images/home/banner/city.jpg"
  }
]
const Homepage = () => {
  const classes = useStyles()
  return(
  <main className={classes.main}>
    <Carousel className={classes.carousal} next={ () => {} } prev={ () => {} } 
    navButtonsAlwaysVisible NextIcon={<ArrowForwardIosRoundedIcon/>} 
    PrevIcon={<ArrowBackIosRoundedIcon/>}>
      {
          items.map( (item, i) => <CarouselItem key={i} item={item} /> )
      }
    </Carousel>
    <Sections/>
  </main>
  )
}

export default Homepage;