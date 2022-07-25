import React from 'react'
import Data from './Data.js'
import './style/Card.css'

const Card = (props) => {

  const addCart = (e) => {
    // console.log(Data[Number(e.target.value)])
    props.add_to_cart(Data[Number(e.target.value)])
  }

  let products = Data.map((data , i) => 
            <div className="card-item" key={i}>
                <p><img src={data['image']} alt='img'></img></p>
                <p>Name: {data['name']}</p>
                <p>Price :${data['price']}</p>
                <p><button value={i} onClick={addCart}>Add to cart</button></p>
            </div>  
  )
//   console.log(products)
  return(
      <div id="card">   
          {products}
      </div>
  )
}

export default Card