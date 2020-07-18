import React from 'react';
import { render } from '@testing-library/react'
import { Footer } from './Footer'

test('exports Footer component', () => {
  expect(Footer).toBeDefined()
})

test('renders Footer component', () => {
  const { container } = render(<Footer />)
  expect(container.getElementsByTagName('footer').length).toBe(1)
});
