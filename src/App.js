import './App.css';
import Login from './components/Login';
import Link from '@mui/material/Link'
import SignUp from './components/SignUp';
import initializeApp from './firebase'
// import messenging from './network/messenging'
import Home from './components/Home';
import Test from './test';
import docRef from './test';
// import { Component } from 'react';
import ViewModel from './components/ViewModel';
import { useEffect } from 'react';
import React from 'react';


// ViewModel().fetchTokenUi();
function App(
  
) {
  const {fetchTokenUi,uiState} = ViewModel()
  React.useEffect(() => {
    fetchTokenUi();
    // console.log(fetchTokenUi())
  }, [])
  // const uiState = ViewModel().uiState

  // useEffect(() => {
  //   console.log("Token:", uiState.fcmToken);
  // }, [uiState.fcmToken]); // Log token value when it changes

  // const {fetchTokenUi} = ViewModel()
  console.log("token is "+ uiState.fcmToken)
  return (
    <div>
      <Home />
     {/* <Link 
                href = "Login"
                underline='hover'
                align = "center"
                m="0"
                p="0"
              >
                Login
              </Link> */}
      {/* <button href="test" >click here</button> */}
      {/* <button onClick={docRef}>click me</button>
      <p>{ uiState.fcmToken }</p> */}
   </div>
  );
}

export default App;
