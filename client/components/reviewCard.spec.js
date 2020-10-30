/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ReviewCard from './reviewCard'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('ReviewCard', () => {
  let card
  let question = {
    id: 20,
    question: 'How much does a US One Dollar Bill cost to make?',
    options: [
      {id: 79, isCorrect: false, option: '$5', questionId: 20},
      {id: 78, isCorrect: true, option: '$0.05', questionId: 20},
      {id: 77, isCorrect: false, option: '$1', questionId: 20},
      {id: 76, isCorrect: false, option: '$0.25', questionId: 20}
    ],
    quizQuestion: {
      id: 10,
      quizId: 1,
      questionId: 20,
      userChoice: 70
    }
  }

  beforeEach(() => {
    card = shallow(<ReviewCard question={question} questionNumber={1} />)
  })

  it('renders the right question number', () => {
    expect(card.find('h5').text()).to.be.equal(`Question 1:`)
  })
  it('renders the right question', () => {
    expect(card.find('div.question').text()).to.be.equal(
      `How much does a US One Dollar Bill cost to make?`
    )
  })
})
