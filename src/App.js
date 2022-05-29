import { Fragment } from 'react';
import GraphApi from './components/GraphApi';
// import RestApi from './components/RestApi'
import classes from './App.module.css';

function App() {

  return (
    <Fragment>
      <h1 className={classes.title}>List of the 10 last SpaceX's missions</h1>
      {/* <RestApi /> */}
      <GraphApi />
      
    </Fragment>

  )

}

export default App;
