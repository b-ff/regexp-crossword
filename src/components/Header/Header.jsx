import React from 'react'
import styled from 'styled-components'
import { config } from '../../config'
import { fontWeights } from '../../layout'

const StyledHeader = styled.header`
  padding: 2rem;
  text-align: center;
  font-size: 2rem;
  font-weight: ${fontWeights.medium};
`

export const Header = () => (
  <StyledHeader>
    Welcome to {config.appName}!
  </StyledHeader>
)
