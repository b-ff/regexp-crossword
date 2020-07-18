import React from 'react'
import styled from 'styled-components'
import { colors } from '../../layout'

const StyledFooter = styled.footer`
  padding: 2rem;
  font-size: .75rem;
  text-align: center;
  color: ${colors.secondary};

  a {
    color: ${colors.secondary};
  }
`

export const Footer = () => (
  <StyledFooter>
    Made by <a href="http://b-ff.ru" target="_blank" rel="noopener noreferrer">Slava Biryukov</a> with love for RegExp and Code Challenges lovers
  </StyledFooter>
)