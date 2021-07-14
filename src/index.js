function h(type, props, ...children) {
  return {
    type,
    props,
    children,
  }
}

const list = h('ul', {}, h('li', {}, 'Item 1'), h('li', {}, 'Item 2'))

console.log(list)
