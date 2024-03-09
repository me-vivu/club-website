import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import AOS from 'aos';
import Signup from './signup'
import Login from './login'
import Home from './home'
import HomePage from './home/home-page'
import OtpVerify from './auth/otpVerify'
import AboutUs from './about/about-us';
// import EVENT1 from './events/eventsection';
import{BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
    
        <Route path='/register' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/verification' element={<OtpVerify/>}></Route>
        <Route path='/home-page' element={<HomePage/>}></Route>
        <Route path='/about' element={<AboutUs/>}></Route>

        {/* <Route path='/eventsection' element={<EVENT1/>}></Route> */}
      </Routes>
    
    </BrowserRouter>
    
  )
}

export default App
