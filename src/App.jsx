import React, { createContext, lazy, Suspense, useEffect, useReducer } from 'react';
import Home from './Pages/home';
import NavBar from './Component/navbar/navbar';

import sod from './Static/images/sod.jpg';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './Component/footer/footer';
import SchoolProfile from './Pages/academics/schoolProfile';
import Layover from './Component/layover/layover';
import { DeanDesk } from './Component/components';
// import { AeronauticalInfo1 } from './Pages/academics/schoolProfile.jsx';

const About = lazy(() => import('./Pages/about'))
const Admissions = lazy(() => import('./Pages/admissions/admissions'))
const Academics = lazy(() => import('./Pages/academics/academics'))

export const SUPERCONTEXT = createContext();

function App() {

  const superInitialState = {
    layover: {
      component: undefined,
      showLayover: false,
    }
  }

  const [superState, superDispatch] = useReducer(superReducer, superInitialState);

  useEffect(() => {
    setTimeout(() => {
      superDispatch({ type: "TRIGGER-LAYOVER", payload: <DeanDesk /> })

    }, 2000);

  }, [])


  return (
    <>
      <SUPERCONTEXT.Provider value={[superState, superDispatch]} >

        <Router>
          {
            superState.layover.showLayover ?
              <Layover />
              : null
          }
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
      </SUPERCONTEXT.Provider>
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

const superReducer = (state, action) => {

  switch (action.type) {
    case 'TRIGGER-LAYOVER':
      console.log(state.layover.showLayover)
      return {
        ...state,
        layover: {
          component: action.payload,
          showLayover: true,
        }
      }
    case 'CLOSE-LAYOVER':
      return {
        ...state,
        layover: {
          component: undefined,
          showLayover: false,
        }
      }

    default:
      throw new Error("Super Reducer Case out of Range")
  }

}

export default App;

// scp -r build/* root@64.227.161.190:/var/www/html/