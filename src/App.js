import React, { lazy, Suspense, useEffect } from 'react';
import Home from './Pages/home';
import NavBar from './Component/navbar/navbar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Footer from './Component/footer/footer';
import { AeronauticalInfo } from './Pages/Aeronautical_Info';
import { Profile } from './Pages/profile';
import SchoolProfile from './Pages/academics/schoolProfile';
// import { AeronauticalInfo1 } from './Pages/academics/schoolProfile.jsx';

const About = lazy(() => import('./Pages/about'))
const Admissions = lazy(() => import('./Pages/admissions/admissions'))
const Academics = lazy(() => import('./Pages/academics/academics'))

function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={
            <SuspenseIt>
              <About />
            </SuspenseIt>
          } />
          <Route path="/admissions/*" element={
            <SuspenseIt>
              <Admissions />
            </SuspenseIt>
          } />
          <Route path="/academics/*" element={
            <SuspenseIt>
              <Academics />
            </SuspenseIt>
          } />

          <Route path="/school/*" element={<SchoolProfile />} />
        </Routes>
        <Footer />
      </Router>
    </>

  );
}

const SuspenseIt = (props) => {
  return (
    <Suspense fallback={<div style={{
      height: "100vh"
    }}><h1>Loading</h1></div>}>
      {props.children}
    </Suspense>
  )
}

export default App;

// scp -r build/* root@64.227.161.190:/var/www/html/