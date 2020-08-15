import React, { useState, useEffect } from 'react'

import Button from '../../UI/Button/Button'
import classes from './AddGalleryItem.module.css'

const AddGalleryItem = (props) => {
  const [titleInput, setTitleInput] = useState('')
  const [urlInput, setUrlInput] = useState('')

  useEffect(
    () => () => {
      setTitleInput('')
      setUrlInput('')
    },
    []
  )

  return (
    <>
      <h2 className={classes.title}>New image</h2>
      <input
        className={classes.input}
        placeholder="Title"
        value={titleInput}
        onChange={(event) => setTitleInput(event.target.value)}
      />
      <input
        className={classes.input}
        placeholder="URL"
        value={urlInput}
        onChange={(event) => setUrlInput(event.target.value)}
      />
      <div className={classes.buttons}>
        <Button clicked={props.closeModal}>CLOSE</Button>
        <Button
          btnType="green"
          clicked={() => props.addItem(titleInput, urlInput)}
        >
          ADD
        </Button>
      </div>
    </>
  )
}

export default AddGalleryItem
