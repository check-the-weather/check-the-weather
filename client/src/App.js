import React, { useState, useEffect } from "react";
import { authedRequester } from "helpers/requesters";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Routes from "helpers/Routes";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Dashboard from "./Pages/Dashboard/Dashboard";

import "./App.scss";

function App() {
  const [isAuthed, setIsAuthed] = useState(false);

  async function checkUserAuth() {
    try {
      const response = await authedRequester('/auth/verify').get().json()
      
      response === true ? setIsAuthed(true) : setIsAuthed(false)
    } catch (error) {
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
          <Route exact path={Routes.login().router} >
            {isAuthed ? <Redirect to={Routes.dashboard().link()} /> : <Login setIsAuthed={setIsAuthed} />}
          </Route>
          <Route exact path={Routes.register().router}>
            {isAuthed ? <Redirect to={Routes.dashboard().link()} /> : <Register setIsAuthed={setIsAuthed} />}
          </Route>
          <Route exact path={Routes.dashboard().router}>
            {isAuthed ? <Dashboard setIsAuthed={setIsAuthed} /> : <Redirect to={Routes.login().link()} />}
          </Route>
        </Switch>
      </Router>
    </div>
  ) 
}

export default App;
