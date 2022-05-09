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

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>

  );
}

export default App;
