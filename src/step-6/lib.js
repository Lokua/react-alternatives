import mitt from 'mitt'

const bus = mitt()

export default function h(type, props, ...children) {
  if (children.length === 1 && Array.isArray(children[0])) {
    return {
      type,
      props,
      children: children[0],
    }
  }

  return {
    type,
    props,
    children,
  }
}

const events = {
  onClick: 'click',
}

export function createElement(node) {
  try {
    if (typeof node.type === 'function') {
      return createElement(
        node.type(Object.assign({}, node.props, node.children)),
      )
    }

    if (typeof node === 'string') {
      return document.createTextNode(node)
    }

    const element = document.createElement(node.type)

    if (node.props && Object.keys(node.props).length) {
      Object.entries(node.props).forEach(([key, value]) => {
        if (events[key]) {
          element.addEventListener(events[key], () => {
            value()
            bus.emit('update')
          })
        } else {
          element.setAttribute(key, value)
        }
      })
    }

    node.children.map(createElement).forEach((child) => {
      element.appendChild(child)
    })

    return element
  } catch (error) {
    console.info('Error caught at node', node)
    console.error(error)
  }
}

export function render(renderNode, mountNode) {
  const prev = createElement(renderNode())
  mountNode.appendChild(prev)

  bus.on('update', () => {
    const next = createElement(renderNode())
    console.info(next, prev)
    // TODO: diff and only update what changed
    mountNode.children[0].replaceWith(next)
  })
}
