/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import PastQuizCard from './pastQuizCard'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('AuthForm', () => {
  let card
  let quiz = {
    id: 1,
    percentage: 100,
    createdAt: '2020-10-29T22:08:31.069Z',
    updatedAt: '2020-10-29T22:38:21.012Z',
    userId: 1
  }

  beforeEach(() => {
    card = shallow(<PastQuizCard quiz={quiz} />)
  })

  it('renders the score of quiz in strong tag', () => {
    expect(card.find('strong').text()).to.be.equal(`Score: 100`)
  })
})
