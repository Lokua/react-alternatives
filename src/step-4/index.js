import h, { render } from './lib'

const list = (
  <ul class="list">
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
)

render(list, document.getElementById('root'))
