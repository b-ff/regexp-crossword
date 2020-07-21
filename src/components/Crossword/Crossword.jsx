import React, { useState } from 'react'
import styled from 'styled-components'
import { config } from '../../config'
import { Cell } from '../Cell'
import { MatchLine } from '../../common/MatchLine'

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

const rows = (new Array(config.rowsCount))
  .fill()
  .map((item, index) => {
    const line = new MatchLine(config.rowRegularExpressions[index])
    line.items = (new Array(config.columnsCount)).fill(null)
    return line
  })

const columns = (new Array(config.columnsCount))
  .fill()
  .map((item, index) => {
    const line = new MatchLine(config.columnRegularExpressions[index])
    line.items = (new Array(config.rowsCount)).fill(null)
    return line
  })

export function Crossword () {
  const [cellValues, setCellValues] = useState((new Array(config.rowsCount * config.columnsCount)).fill(''))

  const cells = []

  const onCellChanged = (row, column, value) => {
    rows[row - 1].setItem(column - 1, value)
    columns[column - 1].setItem(row - 1, value)

    setCellValues([])
  
    console.log(`value changed at row ${row}, column ${column}:`, value)
  }
  
  for (let row = 0; row <= config.rowsCount; row++) {
    for (let column = 0; column <= config.columnsCount; column++) {
      const value = 1
  
      cells.push(
        <Cell
          key={`cell-${row}:${column}`}
          row={row}
          column={column}
          isValid={(row && rows[row - 1].isValid) || (column && columns[column - 1].isValid)}
          onChange={onCellChanged}
          value={value}
        />
      )
    }
  }

  return (
    <StyledCrosswordContainer>
      <StyledCrosswordField>
        {cells}
      </StyledCrosswordField>
    </StyledCrosswordContainer>
  )
}