import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import {Button, Form} from 'react-bootstrap'

const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div className="authpage">
      <div className="introauth row px-0 mx-0">
        <Form
          className="authform col-6 col-4-md col-lg-4"
          onSubmit={handleSubmit}
          name={name}
        >
          <div>
            <label htmlFor="username">
              <small>Username</small>
            </label>
            <input name="username" type="text" />
          </div>
          <div>
            <label htmlFor="password">
              <small>Password</small>
            </label>
            <input name="password" type="password" />
          </div>
          <div>
            <Button type="submit">{displayName}</Button>
          </div>
          {error && error.response && <div> {error.response.data} </div>}
        </Form>
        <div className="intro col-lg-6 col-12 my-5">
          <p className="w-75">
            Welcome To Trivia Trainer. The platform that allows you to become a
            Trivia mastermind. Enjoy endless number of trivia questions and keep
            track of your scores. Come now to PLAY, REVIEW , and IMPROVE.
          </p>
        </div>
      </div>
    </div>
  )
}

const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const username = evt.target.username.value
      const password = evt.target.password.value
      dispatch(auth(username, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
