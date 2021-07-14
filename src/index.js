import { h, createElement } from './lib'

const list = h('ul', {}, [h('li', {}, 'Item 1'), h('li', {}, 'Item 2')])

document.getElementById('root').appendChild(createElement(list))
