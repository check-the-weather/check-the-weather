import React, { useState, useEffect } from "react";
import wretch from 'wretch'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Dashboard from "./Pages/Dashboard/Dashboard";

import "./App.css";

function App() {
  const [isAuthed, setIsAuthed] = useState(false);

  async function checkUserAuth() {
    try {
      const response = await wretch('/auth/verify').headers({ token: localStorage.token}).get().json()
      
      response === true ? setIsAuthed(true) : setIsAuthed(false)
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    checkUserAuth()
  })

  toast.configure({
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })

  return(
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/login' >
            {isAuthed ? <Redirect to='/' /> : <Login setIsAuthed={setIsAuthed} />}
          </Route>
          <Route exact path='/register'>
            {isAuthed ? <Redirect to='/' /> : <Register setIsAuthed={setIsAuthed} />}
          </Route>
          <Route exact path='/'>
            {isAuthed ? <Dashboard setIsAuthed={setIsAuthed} /> : <Redirect to='/login' />}
          </Route>
        </Switch>
      </Router>
    </div>
  ) 
}

export default App;
