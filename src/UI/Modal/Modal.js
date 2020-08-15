import React from 'react'
import ReactDOM from 'react-dom'

import classes from './Modal.module.css'

const Modal = (props) =>
  props.show &&
  ReactDOM.createPortal(
    <>
      <div className={classes.backdrop} onClick={props.backdropClicked}></div>
      <div className={classes.modal}>{props.children}</div>
    </>,
    document.getElementById('modal')
  )

export default Modal
