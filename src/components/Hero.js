import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import '../styles/Hero.css';

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  
  const images = [
    'https://i.imgur.com/Irpq7VF.png',
    'https://i.imgur.com/oPrMVAA.png',
    'https://i.imgur.com/xcKxwNJ.png'
  ];

  useEffect(() => {
    // Set initial load state
    setIsLoaded(true);

    // Start fade out after 3s
    const fadeOutTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 3000);

    // Start rotation after fade out
    const rotationTimer = setTimeout(() => {
      if (currentImageIndex < images.length - 1) {
        setCurrentImageIndex(prevIndex => prevIndex + 1);
      }
    }, 4000);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(rotationTimer);
    };
  }, [currentImageIndex, images.length]);

  useEffect(() => {
    if (currentImageIndex > 0 && currentImageIndex < images.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentImageIndex(prevIndex => prevIndex + 1);
      }, 3000);
      return () => clearTimeout(timeout);
    } else if (currentImageIndex === images.length - 1) {
      setIsAnimationComplete(true);
    }
  }, [currentImageIndex, images.length]);

  return (
    <div className="hero-container">
      <Container>
        <div className="hero-content">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Brew Haven ${index + 1}`}
              className={`hero-image 
                ${index === 0 && isLoaded ? 'fade-in' : ''}
                ${index === 0 && isFadingOut ? 'fade-out' : ''}
                ${index === currentImageIndex && index !== 0 ? 'active' : ''} 
                ${isAnimationComplete && index === images.length - 1 ? 'final' : ''}`}
            />
          ))}
          <div className="hero-text">
            <p className="lead mb-4">Where every cup tells a story</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero; 