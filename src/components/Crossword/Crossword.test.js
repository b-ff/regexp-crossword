import React from 'react';
import { render } from '@testing-library/react'
import { Crossword } from './Crossword'
import { config } from '../../config'

test('exports Crossword component', () => {
  expect(Crossword).toBeDefined()
})

test('renders Crossword component', () => {
  const { container } = render(<Crossword />)
  expect(container.getElementsByTagName('main').length).toBe(1)
})

test('renders correct amount of cells', () => {
  const { container } = render(<Crossword />)
  const expectedAmountOfCells = (config.rowsCount + 1) * (config.columnsCount + 1)
  expect(container.getElementsByTagName('figure')[0].childNodes.length).toBe(expectedAmountOfCells)
})
