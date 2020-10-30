/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import QuizReview from './quizReview'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('AuthForm', () => {
  let review

  let historymatch = {params: {id: 1}}

  beforeEach(() => {
    review = shallow(<QuizReview match={historymatch} />)
  })

  it('renders the right quiz', () => {
    expect(review.find('h3').text()).to.be.equal(`Review Quiz#1`)
  })
})
