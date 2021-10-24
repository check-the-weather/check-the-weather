import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'

import { authedRequester } from 'helpers/requesters'
import Overview from './Overview'
import Community from './Community'

function Dashboard({ setIsAuthed, page }) {

  const [ name, setName] = useState('')

  async function getUserData() {

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
    getUserData()
  }, [])

  function getPageComponent(page) {
    switch(page) {
      case 'Overview':
        return <Overview name={name} logout={logout} />
      case 'Community':
        return <Community name={name} logout={logout} />
      default:
        return <Overview name={name} logout={logout} />
    }
  }

  const targetPage = getPageComponent(page)

  return (
    <>
      {targetPage}
    </>
  )
}

Dashboard.propTypes = {
  setIsAuthed: PropTypes.func,
  page: PropTypes.string,
};

export default Dashboard;