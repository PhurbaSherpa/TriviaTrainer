/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Quiz from './quiz'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('Quiz', () => {
  let quiz
  let historymatch = {params: {id: 1}}
  beforeEach(() => {
    quiz = shallow(<Quiz match={historymatch} />)
  })

  it('renders the quiz# in a h3', () => {
    expect(quiz.find('h3').text()).to.be.equal(`Quiz#1`)
  })
})
