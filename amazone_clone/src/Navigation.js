import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Footer from './footer'
import './style/Navigation.css'

const Navigation = (props) => {
  
  return (
    <div>
      <div id='navigation'>
        <Link to='/'><img src='./amazone.png' alt='logo'></img></Link>
        <p className='txt'> <Link to='/'>Home</Link> </p>
        <div className='inp'><button id='All'>All</button><input type='text' ></input><button id='ser'><i className="fa-solid fa-magnifying-glass"></i></button> </div>
        <p className='txt'>  <Link to='/Login' >{props.user==='' ? 'Login/Register':'hello, '+props.user}</Link> </p>
        <p className='txt'> <Link to='/Cart'><i className="fa-solid fa-cart-shopping"></i><span>{props.size}</span></Link></p>
      </div>

      <div id='outlet'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Navigation