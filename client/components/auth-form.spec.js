/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {AuthForm} from './auth-form'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('AuthForm', () => {
  let login, signup

  beforeEach(() => {
    login = shallow(<AuthForm name="login" displayName="Login" />)
    signup = shallow(<AuthForm name="signup" displayName="Sign Up" />)
  })

  it('renders the login correctly', () => {
    expect(login.find('Button').text()).to.be.equal(`Login`)
  })
  it('renders the signup correctly', () => {
    expect(signup.find('Button').text()).to.be.equal(`Sign Up`)
  })
})
