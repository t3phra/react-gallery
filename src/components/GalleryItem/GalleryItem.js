import React, { useState, useEffect } from 'react'

import {
  MOBILE_BREAKPOINT,
  ERROR_TITLE,
  ERROR_IMAGE,
  ERROR_ALT_TEXT,
} from '../../constants/constants'
import classes from './GalleryItem.module.css'

const GalleryItem = (props) => {
  const [showOverlay, setShowOverlay] = useState(false)
  const [error, setError] = useState(false)
  const [isMobile, setIsMobile] = useState(
    window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches
  )
  const shouldRenderDeleteBtn = (isMobile && showOverlay) || !isMobile

  const resizeScreen = (event) => {
    const width = event.target.innerWidth
    setIsMobile(width <= MOBILE_BREAKPOINT)
  }

  useEffect(() => {
    window.addEventListener('resize', resizeScreen)
    return () => window.removeEventListener('resize', resizeScreen)
  }, [])

  return (
    <div className={classes.galleryItem}>
      <div className={classes.header}>
        <h2 className={classes.title}>{error ? ERROR_TITLE : props.title}</h2>
        {shouldRenderDeleteBtn && (
          <button
            className={classes.deleteBtn}
            onClick={() => {
              setShowOverlay(false)
              props.removeItem()
            }}
          >
            Delete
          </button>
        )}
      </div>
      <div className={classes.imageWrapper}>
        <img
          src={props.url}
          alt="gallery-item"
          className={classes.image}
          onClick={() => setShowOverlay(true)}
          onError={(event) => {
            event.target.onerror = null
            event.target.src = ERROR_IMAGE
            event.target.alt = ERROR_ALT_TEXT
            setError(true)
          }}
        />
        {showOverlay && (
          <div
            className={classes.overlay}
            onClick={() => setShowOverlay(false)}
          />
        )}
      </div>
    </div>
  )
}

export default GalleryItem
