import { useState } from 'react'
import './Gallery.scss'

const Gallery = ({ pictures, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? pictures.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === pictures.length - 1 ? 0 : currentIndex + 1)
  }

  // Si une seule image, on n'affiche pas les contrôles
  const showControls = pictures.length > 1

  return (
    <div className="gallery">
      <div className="gallery__container">
        <img 
          src={pictures[currentIndex]} 
          alt={`${title} - ${currentIndex + 1}`}
          className="gallery__image"
        />
        
        {showControls && (
          <>
            <button 
              className="gallery__arrow gallery__arrow--left"
              onClick={goToPrevious}
              aria-label="Image précédente"
            >
              &#8249;
            </button>
            
            <button 
              className="gallery__arrow gallery__arrow--right"
              onClick={goToNext}
              aria-label="Image suivante"
            >
              &#8250;
            </button>
            
            <div className="gallery__counter">
              {currentIndex + 1} / {pictures.length}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Gallery