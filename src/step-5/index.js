import h, { render } from './lib'

const List = ({ items }) => (
  <ul class="list">
    {items.map((item) => (
      <li>{item}</li>
    ))}
  </ul>
)

render(<List items={['Item 1', 'Item 2']} />, document.getElementById('root'))
