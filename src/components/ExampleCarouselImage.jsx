import React from 'react';

function ExampleCarouselImage({ text, imageUrl }) {
  return (
    <img
      className="d-block w-100"
      src={imageUrl} 
      alt={text}
    />
  );
}

export default ExampleCarouselImage;
