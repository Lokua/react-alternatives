export function h(type, props, ...children) {
  return {
    type,
    props,
    children,
  }
}

export function createElement(node) {
  if (typeof node === 'string') {
    return document.createTextNode(node)
  }

  const element = document.createElement(node.type)

  node.children
    .map(createElement)
    .forEach((child) => element.appendChild(child))

  return element
}

const list = h(
  'ul',
  { class: 'list' },
  h('li', {}, 'Item 1'),
  h('li', {}, 'Item 2'),
)

console.log(list)
