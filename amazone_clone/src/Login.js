import React , {useState} from 'react'
import './style/Login.css'

const Login = (props) => {

  const [ruser , setRuser] = useState([]);
  const [display , setDisplay] = useState(['block' , 'none'])

  const submitHandler = (e) => {
    e.preventDefault()
    let name =document.getElementById('name').value;
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let number = document.getElementById('number').value;
    setRuser([name, email, password , number])
    setDisplay(['block' , 'none'])
  }
  const loginHandler = (e) => {
    e.preventDefault()
    let name =document.getElementById('inpname').value
    let pass = document.getElementById('inppass').value
    if(ruser[1]===name && ruser[2]===pass)  props.fun(ruser[0])
    if(ruser[3]===name && ruser[2]===pass)  props.fun(ruser[0]) 
  }
  const logOut = (e) => {
    setDisplay(['block' , 'none'])
    props.fun('')
  }
  if(props.user!=='') return(<div style={{minHeight:'80vh'}}><button id='lout' onClick={logOut}>Logout</button></div>)
  return (
    <div id="login_register">
      <p><img src="https://thumbs.dreamstime.com/b/simple-vector-filled-flat-amazon-icon-logo-solid-black-pictogram-isolated-white-background-amazon-logo-159029074.jpg" alt=""></img></p>
      <div id='login1' style={{display:display[0]}}>
          <div id='login'>
          <h1>Sign-In</h1><form onSubmit={loginHandler}>
          <div>
            <p>Email or mobile phone number</p>
            <p><input type="text" id='inpname' required></input></p>
            <p>Password</p>
            <p><input type="password" id='inppass' required></input></p>
            <p> <button type="submit">Submit</button> </p>
          </div></form>
          </div>
          <p>New to Amazon?</p>
          <p><button className='btn' onClick={() => setDisplay(['none' , 'block'])}>Create your Amazon account</button></p>
      </div>
      <div id='register1' style={{display:display[1]}}>
        <div id='register'>
          <h1>Create Account</h1><form onSubmit={submitHandler} method='get'>
          <div>
            <p>Your Name</p>
            <p> <input type='text' id='name' required></input> </p>
            <p>Mobile Number</p>
            <p> <input type='number' id='number' required></input> </p>
            <p>Email(optional)</p>
            <p> <input type='email' id='email'></input> </p>
            <p>Password</p>
            <p><input type="password" id='password' placeholder='Atleast 6 characters' required></input></p>
            <p> <button type="submit">Submit</button> </p>
          </div></form>
        </div>
        <p>Already have an account?</p>
        <p><button className='btn' onClick={() => setDisplay(['block' , 'none'])}>Login</button></p>
      </div>
  
    </div>
  )
}

export default Login