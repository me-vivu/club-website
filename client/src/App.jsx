import React, { useEffect } from 'react';
import AOS from 'aos';
import Signup from './signup'
import Login from './login'
import HomePage from './home/home-page'
import OtpVerify from './auth/otpVerify'
import AboutUs from './about/about-us';
import EVENT1 from './events/eventsection';
import Belownav from './events/belownav';
import Projects from './project-section/project';


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
        <Route path='/verification' element={<OtpVerify/>}></Route>
        <Route path='/home-page' element={<HomePage/>}></Route>
        <Route path='/about' element={<AboutUs/>}></Route>

        <Route path='/eventsection' element={<EVENT1/>}></Route>
        <Route path='/belownav' element={<Belownav/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
      </Routes>
    
    </BrowserRouter>
    
  )
}

export default App
