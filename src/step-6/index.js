import h, { render } from './lib'

const items = ['Item 1', 'Item 2']

const List = ({ items }) => (
  <div>
    <ul class="list">
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
    <button
      onClick={() => {
        console.info('mutating items')
        items.push(`Item ${items.length + 1}`)
      }}
    >
      Add Item
    </button>
  </div>
)

render(() => <List items={items} />, document.getElementById('root'))
