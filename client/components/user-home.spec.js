/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {UserHome} from './user-home'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('UserHome', () => {
  let userHome
  let quizzes = [
    {
      id: 1,
      percentage: 100,
      createdAt: '2020-10-29T22:08:31.069Z',
      updatedAt: '2020-10-29T22:38:21.012Z',
      userId: 1
    }
  ]

  beforeEach(() => {
    userHome = shallow(<UserHome username="Cody" quizzes={quizzes} />)
  })

  it('renders the username in an h1', () => {
    expect(userHome.find('h1').text()).to.be.equal(`Welcome, Cody`)
  })
  it('renders all the past quizzes', () => {
    expect(userHome.find('div.pastquizzes')).to.have.lengthOf(1)
  })
})
