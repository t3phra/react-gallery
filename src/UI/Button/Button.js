import React from 'react'
import classNames from 'classnames'

import classes from './Button.module.css'

const Button = ({ clicked, btnType, children, ...other }) => (
  <button
    className={classNames(classes.btn, classes[btnType])}
    onClick={clicked}
    {...other}
  >
    {children}
  </button>
)

export default Button
