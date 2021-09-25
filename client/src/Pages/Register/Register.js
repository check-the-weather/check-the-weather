import React, { useState } from 'react'
import { unauthedRequester } from 'helpers/requesters';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import Group from 'components/Group';
import VGroup from 'components/VGroup';

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

      const response = await unauthedRequester('/auth/register').post(body).json()

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
    <VGroup className={styles.PageContainer}>
      <Group className={styles.TitleContainer}>
        <Group className={styles.CheckThe}>checkthe</Group>
        <Group className={styles.Weather}>weather</Group>
      </Group>
      <form onSubmit={onSubmit}>
        <Group className={styles.NameContainer}>
          <input type="text" name="firstName" value={firstName} placeholder="First name" onChange={event => onChange(event)} className={styles.NameBox} />
          <input type="text" name="lastName" value={lastName} placeholder="Last name" onChange={event => onChange(event)} className={styles.NameBox} />
        </Group>
        <input type="email" name="email" value={email} placeholder="Email" onChange={event => onChange(event)} className={styles.InputBox} />
        <input type="password" name="password" value={password} placeholder="Password" onChange={event => onChange(event)} className={styles.InputBox} />
        <button className={styles.SignUpBtn}>Create account</button>
      </form>
      <Group className={styles.BackButtonContainer}>
        <Link to="/login" className={styles.BackButton}>Already have an account?</Link>
      </Group>
    </VGroup>
  )
}

export default Register;