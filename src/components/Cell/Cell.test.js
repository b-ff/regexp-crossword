import React from 'react';
import { render } from '@testing-library/react'
import { Cell } from './Cell'

test('exports Cell component', () => {
  expect(Cell).toBeDefined()
})

test('renders Cell component', () => {
  const row = 0
  const column = 1
  const id = `cell-r${row}-c${column}`
  const { container } = render(<Cell row={row} column={column}/>)
  expect(container.querySelector(`#${id}`)).toBeDefined()
})
