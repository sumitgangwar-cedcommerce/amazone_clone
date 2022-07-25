import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Cart';
import Home from './Home';
import Login from './Login';
import Navigation from './Navigation';

function App() {

  const [cart , setCart]  = useState([])
  const [user , setUser]  = useState('');

  const changeUser = (data) => {
    setUser(data);
  }

  const add = (data) =>{
    if(cart.indexOf(data)===-1)  setCart([...cart , data])
  }

  const delete_item = (data) =>{
    let temp = cart;
    temp.splice(data , 1)
    setCart([...temp])
  }

  const clearCart = () =>{
    setCart([]);
  }


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation size={cart.length} user={user}/>}>
          <Route index element={<Home fun={add} />}></Route>
          <Route path="Login" element={<Login fun={changeUser} user={user}/>}></Route>
          <Route path='Cart' element={<Cart user={user} data={cart} deleteItem = {delete_item} clearCart={clearCart}/>}></Route>
        </Route>
      </Routes> 
    </div>
  );
}

export default App;
