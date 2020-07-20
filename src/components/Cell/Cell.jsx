import React from 'react'
import styled from 'styled-components'
import { config } from '../../config'
import { colors } from '../../layout'

const StyledCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  box-sizing: border-box;
  outline: 1px solid #000;
  background-color: ${({ isValid }) => isValid ? 'green' : 'transparent'};
  
  &:after {
    display: block;
    content: " ";
    margin-top: 100%;
  }
`
const StyledRowHeading = styled(StyledCell)`
  justify-content: flex-start;
  outline: none;
`

const StyledColumnHeading = styled(StyledRowHeading)`
  writing-mode: vertical-lr;
  text-orientation: mixed;
`

const StyledInput = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 2rem;
  border: none;
  outline: none;

  &:invalid {
    color: ${colors.invalid}
  }
`

export function Cell ({row, column, onChange, validityInstances = []}) {
  const id = `cell-r${row}-c${column}`
  const isValid = !!validityInstances.find(matchLine => matchLine.isValid)

  if (!row) {
    return <StyledColumnHeading
      id={id}
      isValid={isValid}
    >
      {config.columnRegularExpressions[column - 1]}
    </StyledColumnHeading>
  }

  if (row && !column) {
    return <StyledRowHeading
      id={id}
      isValid={isValid}
    >
      {config.rowRegularExpressions[row - 1]}
    </StyledRowHeading>
  }

  if (row && column) {
    return <StyledCell
      id={id}
      isValid={isValid}
    >
      <StyledInput
        type="text"
        pattern="(1|0)"
        maxLength="1"
        onChange={event => onChange(event.target.value) || console.log(133, validityInstances)}
      />
      <div style={{position: 'absolute', pointerEvents: 'none'}}>{validityInstances.map(i => i.isValid.toString()).join(', ')}</div>
    </StyledCell>
  }
}
