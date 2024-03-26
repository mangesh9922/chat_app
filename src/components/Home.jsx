import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
// import ViewModel from './ViewModel'
function Home() {
  
  useEffect(() => {
    console.log("Token:", uiState.fcmToken);
  }, [uiState]); // Log token value when it changes

  return (
      <div>
      <Navbar />
      <p>{uiState.fcmToken}</p>
      <Footer/>
    </div>
  )
}

export default Home