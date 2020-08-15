import React from 'react'

import icon from '../../images/gallery-icon.png'
import classes from './Header.module.css'

const Header = () => (
  <div className={classes.header}>
    <img src={icon} alt="gallery-icon" className={classes.icon} />
    <h2 className={classes.title}>Images</h2>
  </div>
)

export default Header
