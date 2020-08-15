import React, { useState } from 'react'

import Header from './components/Header/Header'
import Button from './UI/Button/Button'
import Modal from './UI/Modal/Modal'
import AddGalleryItem from './components/AddGalleryItem/AddGalleryItem'
import GalleryItem from './components/GalleryItem/GalleryItem'
import classes from './App.module.css'

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [galleryItems, setGalleryItems] = useState([])

  const onOpenModal = () => setIsModalOpen(true)
  const onCloseModal = () => setIsModalOpen(false)

  const addItemToGallery = (title, image) => {
    setGalleryItems((prevState) => [{ title, image }, ...prevState])
    onCloseModal()
  }

  const removeItemFromGallery = (i) =>
    setGalleryItems((prevState) =>
      prevState.filter((galleryItem, index) => index !== i)
    )

  return (
    <div className={classes.app}>
      <Header />
      <Button btnType="green" clicked={onOpenModal}>
        NEW
      </Button>
      <Modal show={isModalOpen} backdropClicked={onCloseModal}>
        <AddGalleryItem closeModal={onCloseModal} addItem={addItemToGallery} />
      </Modal>
      {galleryItems.map((galleryItem, index) => (
        <GalleryItem
          title={galleryItem.title}
          url={galleryItem.image}
          key={`gallery-item-${index}`}
          removeItem={() => removeItemFromGallery(index)}
        />
      ))}
    </div>
  )
}

export default App
