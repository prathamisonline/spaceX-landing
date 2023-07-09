import { useState } from 'react'
import Navbar from "./component/Navbar.jsx";
import "./styles.css"
import Falcon from "./component/Falcon.jsx";
import SpaceX from "./component/SpaceX.jsx";
import Footer from "./component/Footer.jsx";
function App() {

  return (
    <div >
      <Navbar/>
        <Falcon/>
        <SpaceX/>
      <Footer/>

    </div>
  )
}

export default App
