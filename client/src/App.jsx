import React, { useEffect } from 'react';
import AOS from 'aos';
import Signup from './signup'
import Login from './login'
import HomePage from './home/home-page'
import OtpVerify from './auth/otpVerify'
import AboutUs from './about/about-us';
import EVENT1 from './events/eventsection';
import Belownav from './events/belownav';

import ProjectSection from './home/project';

import AddProjectForm from './database/projects/projects';
import AddEventForm from './database/events/events';
import AddMemberForm from './database/members/members';

import GoogleDriveFileUploader from './drive';


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
        <Route path='/project-page' element = {<ProjectSection/>}></Route>

        <Route path='/add-project' element={<AddProjectForm/>}></Route>
        <Route path='/add-events' element={<AddEventForm/>}></Route>
        <Route path='/add-members' element={<AddMemberForm/>}></Route>

        <Route path='/upload-drive' element={<GoogleDriveFileUploader/>}></Route>
      </Routes>
    
    </BrowserRouter>
    
  )
}

export default App
