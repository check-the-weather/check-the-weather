import React, { useState } from 'react'
import { unauthedRequester } from 'helpers/requesters';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'

import Group from 'components/Group';
import VGroup from 'components/VGroup';

import styles from './Login.module.scss'

function Login({ setIsAuthed }) {

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  })

  const { email, password } = inputs;

  const onChange = (event) => {
    setInputs({...inputs, [event.target.name] : event.target.value })
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    try {
      const body = { email, password}

      const response = await unauthedRequester('/auth/login').post(body).json()

      if (response.token) {
        localStorage.setItem('token', response.token)

        setIsAuthed(true)

        toast.success('Logged in successfully')
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
    <Group className={styles.PageContainer} fullHeight>
      <VGroup className={styles.RegisterContainer}>
        <Group className={styles.TitleContainer}>
          <Group className={styles.CheckThe}>checkthe</Group>
          <Group className={styles.Weather}>weather</Group>
        </Group>
        <h1 className={styles.RegisterText}>Don't have an account?</h1>
        <Link to="/register" className={styles.SignUpBtn}>Sign up</Link>
      </VGroup>
      <VGroup className={styles.LoginContainer}>
        <h1 onSubmit={onSubmit} className={styles.LoginText}>Log in to your account</h1>
        <form onSubmit={onSubmit}>
          <input type="email" name="email" value={email} placeholder="Email" onChange={event => onChange(event)} className={styles.InputBox} />
          <input type="password" name="password" value={password} placeholder="Password" onChange={event => onChange(event)} className={styles.InputBox} />
          <button className={styles.SignInBtn}>Sign In</button>
        </form>
      </VGroup>
    </Group>
  )
}

export default Login;