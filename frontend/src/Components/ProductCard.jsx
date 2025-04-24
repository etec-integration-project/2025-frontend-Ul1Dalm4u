import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importamos Link
import "./ProductCard.css";

const ProductCard = ({ productId, productImages, productName, productDescription, productPrice }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeImage = (direction) => {
    const newIndex = (currentIndex + direction + productImages.length) % productImages.length;
    setCurrentIndex(newIndex);
  };

  return (
    <Link to={`/products/${productId}`} className="card-link"> {/* Enlace al detalle del producto */}
      <div className="card">
        <div className="card_image">
          <div className="slider">
            <img className="sliderImage" src={productImages[currentIndex]} alt={productName} />
          </div>
          <button
            className="prev"
            onClick={(e) => {
              e.preventDefault(); // Evitar navegación al cambiar imágenes
              changeImage(-1);
            }}
          >
            &#10094;
          </button>
          <button
            className="next"
            onClick={(e) => {
              e.preventDefault(); // Evitar navegación al cambiar imágenes
              changeImage(1);
            }}
          >
            &#10095;
          </button>
        </div>
        <div className="card_text">
          <h2>{productName}</h2>
          <p>{productDescription}</p>
          <p>{productPrice}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
