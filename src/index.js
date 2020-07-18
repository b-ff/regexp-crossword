import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { createGlobalStyle } from 'styled-components'

import { Header } from './components/Header'
import { Crossword } from './components/Crossword'
import { Footer } from './components/Footer'

import { fontWeights } from './layout'


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@${Object.values(fontWeights).join(';')}&display=swap');

  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    align-content: stretch;
    width: 100%;
    height: 100%;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <Crossword /> 
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
