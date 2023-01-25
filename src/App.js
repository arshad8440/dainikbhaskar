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
  const [mode, setmode] = useState('light');
  const pagesize = 10;
  const location = 'in';
  const [progress, setprogress] = useState(0)
  const toglemode = ()=>{
    if(mode === 'dark'){
      setmode('light');
      document.body.style = 'background: white; color: black';
    }
    else{
      setmode('dark');
     
    }
  }
    return (
        <Router>
            <Navbar  mode= {mode} toglemode = {toglemode}/>
            <LoadingBar height={3} color='#f11946' progress={progress}/>
            <Switch>
              <Route exact path="/"><News setprogress = {setprogress} key='business' pageSize = {pagesize} country= {location} category= 'business' mode= {mode} toglemode = {toglemode}/></Route>
              <Route exact path="/entertainment"><News setprogress = {setprogress} key='entertainment' pageSize = {pagesize} country= {location} category= 'entertainment' mode= {mode} toglemode = {toglemode}/></Route>
              <Route exact path="/health"><News setprogress = {setprogress} key='health' pageSize = {pagesize} country= {location} category= 'health' mode= {mode} toglemode = {toglemode}/></Route>
              <Route exact path="/science"><News setprogress = {setprogress} key='science' pageSize = {pagesize} country= {location} category= 'science' mode= {mode} toglemode = {toglemode}/></Route>
              <Route exact path="/sports"><News setprogress = {setprogress} key='sports' pageSize = {pagesize} country= {location} category= 'sports' mode= {mode} toglemode = {toglemode}/></Route>
              <Route exact path="/technology"><News setprogress = {setprogress} key='technology' pageSize = {pagesize} country= {location} category= 'technology' mode= {mode} toglemode = {toglemode}/></Route>
            </Switch>  
        </Router>
    )

}
export default App;



