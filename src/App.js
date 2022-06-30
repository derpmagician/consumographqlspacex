import { Fragment } from 'react';
import { Routes, Route, Link } from "react-router-dom";

// import RestApi from './components/RestApi'
import Home from './pages/Home';
import MissionDetail from './pages/MissionDetail';
import classes from './App.module.css';

function App() {

  return (
    <Fragment>
      <h1 className={classes.title}>List of the 10 last SpaceX's missions</h1>
      {/* <RestApi /> */}
      
      <Routes>
        
        <Route path="mission/:id" element={<MissionDetail />} />
        <Route path="*" element={<Home />} />
      </Routes>
      
    </Fragment>

  )

}

export default App;
