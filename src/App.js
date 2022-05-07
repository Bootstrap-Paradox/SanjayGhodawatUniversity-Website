import React from 'react';
import Home from './Pages/home';
import NavBar from './Component/navbar/navbar';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
