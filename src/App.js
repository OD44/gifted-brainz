import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home/Home';
import Dashboard from './Components/pages/Dashboard.jsx';
import Quis from './Components/pages/Quis.jsx';
import Quizlead from './Components/pages/Quizlead.jsx';
import Spin from './Components/pages/Spin.jsx';
import Course from './Components/pages/Course.jsx';
import Payment from './Components/pages/Payment';
import Refe from './Components/pages/Refe.jsx';
import Settings from './Components/pages/Settings.jsx';
import Comm from './Components/pages/Comm.jsx';
import Earnings from './Components/pages/Earnings.jsx';
import Get from './Components/pages/Get.jsx';
// import Mainbar from './Components/pages/Mainbar.jsx';

const App= ()=> {
  return (
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path="/" element={<Dashboard />} />
       <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/quiz" element={<Quis />} />
        <Route path="/quizlead" element={<Quizlead />} />
        <Route path="/spin" element={<Spin />} />
        <Route path="/course" element={<Course />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/refe" element={<Refe />} />
        <Route path="/earnings" element={<Earnings />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/get" element={<Get />} />
        <Route path="/community" element={<Comm />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
