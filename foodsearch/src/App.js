import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home';
import Save from './components/pages/Save';
import Resipe from './components/pages/Resipe';
import Korean from './components/pages/korean';
import Indian from './components/pages/Indian';
import Signup from './components/pages/Signup';
import Italian from './components/pages/Italian';
import French from './components/pages/French';
import Aboutus from './components/pages/Aboutus';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
       <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/save' element={<Save/>}/>
        <Route path='/resipe' element={<Resipe/>}/>
        <Route path='/korean' element={<Korean/>}/>
        <Route path='/indian' element={<Indian/>}/>
        <Route path='/sign-up' element={<Signup/>}/>
        <Route path='/italian' element={<Italian/>}/>
        <Route path='/french' element={<French/>}/>
        <Route path='/about-us' element={<Aboutus/>}/>
     </Routes>
    </div>
  );
}

export default App;
