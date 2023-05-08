import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import About from './components/About';
import Navbar from './components/Navbar';
import Extra from './components/Extra';
import Admission from './components/Admission';
import Notice from './components/Notice';
import Contact from './components/Contact';
import Team from './components/Team';
import Education from './components/Education';
import Prospectus from './components/Prospectus';
import Home from './components/Home';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
// import Slide from './components/Slide';

function App() {
  const [mode, setMode] = useState('light'); //Whether dark is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success")
      // document.title = 'TextMod - Dark Mode'
      // setInterval(() =>{
      //   document.title = 'TextMod is amazing';
      // }, 2000);
      // setInterval(() =>{
      //   document.title = 'Install TextMod now';
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      // document.title = 'TextMod - Light Mode'
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextMod" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/">
              <Home mode={mode} />
            </Route>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/education">
              <Education mode={mode} />
            </Route>
            <Route exact path="/notice">
              <Notice mode={mode} />
            </Route>
            <Route exact path="/admission">
              <Admission mode={mode} />
            </Route>
            <Route exact path="/team">
              <Team mode={mode} />
            </Route>
            <Route exact path="/prospectus">
              <Prospectus mode={mode} />
            </Route>
            <Route exact path="/extra">
              <Extra mode={mode} />
            </Route>
            <Route exact path="/contact">
              <Contact mode={mode} />
            </Route>
            {/* <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Try TextMod - Word counter, Character Counter, Remove extra Spaces" mode={mode} />
          </Route> */}
          </Switch>      </div>
      </Router>

    </>
  );
}

export default App;