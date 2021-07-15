import { h, render } from './lib'

const list = h(
  'ul',
  { class: 'list' },
  h('li', {}, 'Item 1'),
  h('li', {}, 'Item 2'),
)

render(list, document.getElementById('root'))
