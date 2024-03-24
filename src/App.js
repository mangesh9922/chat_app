import './App.css';
import Login from './components/Login';
import Link from '@mui/material/Link'
import SignUp from './components/SignUp';
import initializeApp from './firebase'
import messenging from './network/messenging'
import Home from './components/Home';
// import { Component } from 'react';


function App() {
  return (
    <div>
      <Home/>
     <Link 
                href = "Login"
                underline='hover'
                align = "center"
                m="0"
                p="0"
              >
                Login
              </Link>
      
          
   </div>
  );
}

export default App;
