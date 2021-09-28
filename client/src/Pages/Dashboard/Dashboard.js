import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { authedRequester } from 'helpers/requesters'

import Overview from './Overview'

function Dashboard({ setIsAuthed }) {

  const [ name, setName] = useState('')

  async function getName() {

    try {
      const response = await authedRequester('/dashboard').get().json() 
      setName(`${response.firstName} ${response.lastName}`)
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