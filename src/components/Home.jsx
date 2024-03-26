import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
// import ViewModel from './ViewModel'
function Home(
  prop
) {
  
  useEffect(() => {
    console.log("Token:", prop.fcmToken);
  }, [prop]); // Log token value when it changes

  return (
      <div>
      <Navbar />
      <p>{prop.fcmToken}</p>
      <Footer/>
    </div>
  )
}

export default Home