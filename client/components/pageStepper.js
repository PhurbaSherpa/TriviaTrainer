import React from 'react'
import {Pagination} from 'react-bootstrap'

const PageStepper = props => {
  const {quizzes, setpage, page} = props
  let items = []
  items.push(
    <Pagination.Item
      onClick={() => {
        setpage(0)
      }}
      key={0}
      active={0 === page}
    >
      {1}
    </Pagination.Item>
  )
  for (let number = 1; number < Math.ceil(quizzes / 5); number++) {
    items.push(
      <Pagination.Item
        onClick={() => {
          setpage(number)
        }}
        key={number}
        active={number === page}
      >
        {number + 1}
      </Pagination.Item>
    )
  }
  return (
    <Pagination className="mb-5" size="sm">
      <Pagination.First
        onClick={() => {
          setpage(0)
        }}
      />
      <Pagination.Prev
        onClick={() => {
          if (page !== 0) {
            setpage(page - 1)
          }
        }}
      />
      {page >= items.length - 5 && items.length >= 5
        ? items.slice(items.length - 5, page + 5)
        : items.length < 5 ? items : items.slice(page, page + 5)}
      <Pagination.Next
        onClick={() => {
          if (page !== items.length - 1) {
            setpage(page + 1)
          }
        }}
      />
      <Pagination.Last
        onClick={() => {
          setpage(items.length - 1)
        }}
      />
    </Pagination>
  )
}

export default PageStepper
