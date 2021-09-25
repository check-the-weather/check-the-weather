import React, { useState } from 'react'
import wretch from 'wretch'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import styles from './Register.module.scss'

function Register({ setIsAuthed }) {

  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  const { firstName, lastName, email, password } = inputs;

  const onChange = (event) => {
    setInputs({...inputs, [event.target.name] : event.target.value })
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    try {
      const body = { firstName, lastName, email, password}

      const response = await wretch('/auth/register').post(body).json()

      if (response.token) {
        localStorage.setItem('token', response.token)

        setIsAuthed(true)

        toast.success('Registered Successfully')
      }
      else {
        setIsAuthed(false)
        toast.error(response)
      }



    } catch (error) {
      console.error(error.message)
    }
  }
  return (
    <div className={styles.PageContainer}>
      <div className={styles.TitleContainer}>
        <div className={styles.CheckThe}>checkthe</div>
        <div className={styles.Weather}>weather</div>
      </div>
      <form onSubmit={onSubmit}>
        <div className={styles.NameContainer}>
          <input type="text" name="firstName" value={firstName} placeholder="First name" onChange={event => onChange(event)} className={styles.NameBox} />
          <input type="text" name="lastName" value={lastName} placeholder="Last name" onChange={event => onChange(event)} className={styles.NameBox} />
        </div>
        <input type="email" name="email" value={email} placeholder="Email" onChange={event => onChange(event)} className={styles.InputBox} />
        <input type="password" name="password" value={password} placeholder="Password" onChange={event => onChange(event)} className={styles.InputBox} />
        <button className={styles.SignUpBtn}>Create account</button>
      </form>
      <div className={styles.BackButtonContainer}>
        <Link to="/login" className={styles.BackButton}>Already have an account?</Link>
      </div>
    </div>
  )
}

export default Register;