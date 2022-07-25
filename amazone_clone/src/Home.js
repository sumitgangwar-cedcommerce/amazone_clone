import React, { useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import Card from './Card'
import './style/Home.css'

const Home = (props) => {
  const images = ['./crousel1.png' , './crousel2.png' , './crousel3.png']
  

  
  function Item(props){
    return(
      <div id='crousel'>
        <img src = {props.item} alt='img'></img>
      </div>
    )
    
  }

  return (
    <div id='home'>
      <Carousel>
        {
          images.map((item, i)=>  <Item key={i} item={item}></Item>)
        }
      </Carousel>
      <Card add_to_cart={props.fun} ></Card>
    </div>
  )
}

export default Home