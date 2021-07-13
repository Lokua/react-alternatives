import 'core-js/stable'
import 'regenerator-runtime/runtime'
import React from 'react'
import { render } from 'react-dom'
import App from './App'

renderApp()

function renderApp() {
  render(<App />, global.document.getElementById('root'))
}

if (module.hot) {
  module.hot.accept('./App', renderApp)
}
