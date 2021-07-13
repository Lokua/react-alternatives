import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { render } from 'solid-js/web'
import App from './App'

renderApp()

function renderApp() {
  render(() => <App />, global.document.getElementById('root'))
}

if (module.hot) {
  module.hot.accept('./App', renderApp)
}
