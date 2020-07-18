import React from 'react';
import { render } from '@testing-library/react'
import { Header } from './Header'
import { config } from '../../config'

test('exports Header component', () => {
  expect(Header).toBeDefined()
})

test('renders Header component', () => {
  const { container } = render(<Header />)
  expect(container.getElementsByTagName('header').length).toBe(1)
});

test('injects application name to Header component', () => {
  const { getByText } = render(<Header />)
  const linkElement = getByText(new RegExp(config.appName, 'gi'))
  expect(linkElement).toBeInTheDocument()
});
