import { isEmpty } from 'lodash/fp'
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
        node.type(
          Object.assign({}, node.props, {
            children: node.children,
          }),
        ),
      )
    }

    if (typeof node === 'string') {
      return document.createTextNode(node)
    }

    const element = document.createElement(node.type)

    if (!isEmpty(node.props)) {
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

export function render(node, mountNode) {
  const prev = createElement(node)
  mountNode.appendChild(prev)

  bus.on('update', () => {
    const next = createElement(node)
    update(mountNode, next, prev)
  })
}

function update(parent, newNode, oldNode, index = 0) {
  if (!oldNode) {
    parent.appendChild(newNode)
  } else if (!newNode) {
    parent.removeChild(parent.childNodes[index])
  } else if (newNode.type !== oldNode.type) {
    parent.replaceChild(newNode, parent.childNodes[index])
  } else {
    for (
      let i = 0;
      i < Math.max(newNode.children.length, oldNode.children.length);
      i++
    ) {
      update(
        parent.childNodes[index],
        newNode.children[i],
        oldNode.children[i],
        i,
      )
    }
  }
}
