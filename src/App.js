import React from 'react';
import Home from './Pages/home';
import NavBar from './Component/navbar/navbar';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './Pages/about';
import Footer from './Component/footer/footer';
import Faculty from './Pages/faculty';
import { AeronauticalInfo } from './Pages/Aeronautical_Info';
import { Profile } from './Pages/profile';
import { AeronauticalInfo1 } from './Pages/Aeronautical_Info_1';
import { About1 } from './Pages/about1';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about-1" element={<About1 />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/aeronautical-info" element={<AeronauticalInfo />} />
          <Route path="/aeronautical-profile" element={<Profile />} />
          <Route path="/aeronautical-info-1" element={<AeronauticalInfo1 />} />
        </Routes>
        <Footer />
      </Router>
    </>

  );
}

export default App;

// scp -r build/* root@64.227.161.190:/var/www/html/