import { createEffect } from 'solid-js'
import { styled } from 'solid-styled-components'

const Dialog = styled('dialog')`
  z-index: 2;
  position: absolute;
  top: 0;
  width: 100vw - 16px;
  height: 100vh - 16px;
  margin: 32px;
  margin-left: auto;
  margin-right: auto;
  padding: 32px;
  border: 1px solid black;

  > button {
    position: absolute;
    top: 0;
    right: 0;
    width: 32px;
    height: 32px;
    border: 0;
    background-color: white;
    font-size: 30px;
    color: gray;
  }
`

export default function Modal(props) {
  createEffect((isOpen) => {
    if (isOpen) {
      const onKeyUp = (e) => {
        if (e.key === 'Escape') {
          props.onClose()
        }
      }

      document.addEventListener('keyup', onKeyUp)

      return () => {
        document.removeEventListener('keyup', onKeyUp)
      }
    }
  }, props.isOpen)

  return (
    <Dialog open={props.isOpen}>
      <button onClick={props.onClose}>&times;</button>
      {props.children}
    </Dialog>
  )
}
