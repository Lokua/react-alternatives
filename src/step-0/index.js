// <ul class="list">
//   <li>Item 1</li>
//   <li>Item 2</li>
// </ul>
// <button>Add Item</button>

const items = ['Item 1', 'Item 2']
const root = document.getElementById('root')

const list = document.createElement('ul')

items.forEach((item) => {
  const li = document.createElement('li')
  li.textContent = item
  list.appendChild(li)
})

const button = document.createElement('button')
button.textContent = 'Add Item'

button.addEventListener('click', () => {
  const nextItemText = `Item ${items.length + 1}`
  items.push(nextItemText)
  const li = document.createElement('li')
  li.textContent = nextItemText
  list.appendChild(li)
})

root.appendChild(list)
root.appendChild(button)
