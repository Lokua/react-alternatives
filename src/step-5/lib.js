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
        element.setAttribute(key, value)
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
  mountNode.appendChild(createElement(node))
}
