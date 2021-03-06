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
  const [isLoading, setIsLoading] = useState(true)

  async function checkUserAuth() {
    try {
      const response = await authedRequester('/auth/verify').get().json()     
      if (response) setIsAuthed(true);
    } catch (error) {
      setIsAuthed(false)
      console.clear()
    }

    setIsLoading(false)
  }

  useEffect(() => {
    checkUserAuth()
  }, [])

  toast.configure({
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })

  if (isLoading) {
    return <div /> // Still checking if user is authed
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={Routes.login().router} >
            {isAuthed ? <Redirect to={Routes.overview().link()} /> : <Login setIsAuthed={setIsAuthed} />}
          </Route>
          <Route exact path={Routes.register().router}>
            {isAuthed ? <Redirect to={Routes.overview().link()} /> : <Register setIsAuthed={setIsAuthed} />}
          </Route>

          <Route exact path={Routes.overview().router}>
            {isAuthed ? <Dashboard setIsAuthed={setIsAuthed} page="Overview" /> : <Redirect to={Routes.login().link()} />}
          </Route>
          <Route exact path={Routes.community().router}>
            {isAuthed ? <Dashboard setIsAuthed={setIsAuthed} page="Community" /> : <Redirect to={Routes.login().link()} />}
          </Route>
        </Switch>
      </Router>
    </div>
  ) 
}

export default App;
