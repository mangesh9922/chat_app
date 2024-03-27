import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { TextField } from '@mui/material';
// import ViewModel from './ViewModel'
function Home(
  {uiState,
  onUsernameChange}
) {
  
  useEffect(() => {
    console.log("Token:", uiState.fcmToken);
  }, [uiState]); // Log token value when it changes

  return (
      <div>
      <Navbar />
      <p>{uiState.fcmToken}</p>
      <p>{uiState.username}</p>
      <TextField value={uiState.username} onChange={onUsernameChange}>
      
      </TextField>
      <Footer/>
    </div>
  )
}

export default Home