import React from 'react'
import styled from 'styled-components'
import { config } from '../../config'
import { Cell } from '../Cell'

const StyledCrosswordContainer = styled.main`
  flex: 1 100%;
  text-align: center;
  padding: 1rem;
`

const StyledCrosswordField = styled.figure`
  display: grid;
  grid-template-rows: repeat(${config.rowsCount + 1}, 1fr);
  grid-template-columns: repeat(${config.columnsCount + 1}, 1fr);
  width: 36%;
  margin: 0 32%;
  text-align: center;
`

const cells = []

const onCellChanged = (row, column, value) => {
  console.log(`value changed at row ${row}, column ${column}:`, value)
}

for (let row = 0; row <= config.rowsCount; row++) {
  for (let column = 0; column <= config.columnsCount; column++) {
    cells.push(
      <Cell
        key={`cell-${row}:${column}`}
        row={row}
        column={column}
        onChange={onCellChanged.bind(null, row, column)}
      />
    )
  }
}

export const Crossword = () => (
  <StyledCrosswordContainer>
    <StyledCrosswordField>
      {cells}
    </StyledCrosswordField>
  </StyledCrosswordContainer>
)
