import React from 'react';
import useStyles from './carousel_item_styles'

const CarouselItem = (props) =>
{
  const classes = useStyles()
  return (
    <img src={props.item.image} className={classes.bannerImage}></img>
  )
}

export default CarouselItem;