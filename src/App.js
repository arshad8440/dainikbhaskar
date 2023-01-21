import './App.css';
import React, { useState } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

const App = ()=>{
  const pagesize = 10;
  const [progress, setprogress] = useState(0)

    return (
        <Router>
            <Navbar/>
            <LoadingBar height={3} color='#f11946' progress={progress}
      />
            <Switch>
              <Route exact path="/"><News setprogress = {setprogress} key='business' pageSize = {pagesize} country= 'ae' category= 'business'/></Route>
              <Route exact path="/entertainment"><News setprogress = {setprogress} key='entertainment' pageSize = {pagesize} country= 'ae' category= 'entertainment'/></Route>
              <Route exact path="/health"><News setprogress = {setprogress} key='health' pageSize = {pagesize} country= 'ae' category= 'health'/></Route>
              <Route exact path="/science"><News setprogress = {setprogress} key='science' pageSize = {pagesize} country= 'ae' category= 'science'/></Route>
              <Route exact path="/sports"><News setprogress = {setprogress} key='sports' pageSize = {pagesize} country= 'ae' category= 'sports'/></Route>
              <Route exact path="/technology"><News setprogress = {setprogress} key='technology' pageSize = {pagesize} country= 'ae' category= 'technology'/></Route>
            </Switch>  
        </Router>
    )

}
export default App;



