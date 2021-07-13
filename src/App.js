import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { getImageUrls } from './api'
import Modal from './Modal'

const Header = styled.header`
  display: flex;
  justify-content: center;
`

const ImageGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  > img {
    width: 300px;
    height: 300px;
    margin: 16px;
  }
`

const ModalImage = styled.img`
  width: 700px;
  height: 700px;
`

export default function App() {
  const [images, setImages] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    ;(async () => {
      setImages(await getImageUrls())
    })()
  }, [])

  return (
    <div>
      <Header>
        <h1>Image Grid Demo</h1>
      </Header>
      <main>
        <ImageGrid>
          {images
            ? images.map((url) => (
                <img
                  key={url}
                  src={url}
                  alt={url}
                  onClick={() => {
                    setSelectedImage(url)
                  }}
                />
              ))
            : 'Loading...'}
        </ImageGrid>
      </main>
      <Modal
        preventScroll
        isOpen={!!selectedImage}
        onClose={() => {
          setSelectedImage(null)
        }}
      >
        <ModalImage
          key={selectedImage}
          src={selectedImage}
          alt={selectedImage}
        />
      </Modal>
    </div>
  )
}
