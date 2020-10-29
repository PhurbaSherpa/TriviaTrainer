/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import QuizCard from './quizCard'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('QuizCard', () => {
  let quizCard
  let question = {
    id: 20,
    question: 'How much does a US One Dollar Bill cost to make?',
    options: [
      {id: 79, isCorrect: false, option: '$5', questionId: 20},
      {id: 78, isCorrect: true, option: '$0.05', questionId: 20},
      {id: 77, isCorrect: false, option: '$1', questionId: 20},
      {id: 76, isCorrect: false, option: '$0.25', questionId: 20}
    ]
  }
  beforeEach(() => {
    quizCard = shallow(<QuizCard question={question} questionNumber={1} />)
  })

  it('renders the question number in an h5', () => {
    expect(quizCard.find('h5').text()).to.be.equal(`Question 1:`)
  })

  it('render the correct question', () => {
    expect(quizCard.find('div.question').text()).to.be.equal(
      `How much does a US One Dollar Bill cost to make?`
    )
  })
})
