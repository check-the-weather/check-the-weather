import React, { useState, useEffect } from 'react'
import wretch from 'wretch'
import { toast } from 'react-toastify'

import Overview from './Overview'

function Dashboard({ setIsAuthed }) {

  const [ name, setName] = useState('')

  async function getName() {

    try {
      const response = await wretch('/dashboard').headers({ token: localStorage.token}).get().json()
      setName(response.firstName)
    } catch (error) {
      console.error(error.message)
    }
  }

  function logout(e) {
    e.preventDefault()
    localStorage.removeItem('token')
    setIsAuthed(false)
    toast.success('Logged out successfully')
  }

  useEffect(() => {
    getName()
  }, [])

  return (
    <Overview name={name} logout={logout}/>
  )
}

export default Dashboard;