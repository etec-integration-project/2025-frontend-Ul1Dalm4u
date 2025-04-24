import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProductDetailsPage.css';
import imagesById from './data';

const ProductDetailsPage = ({ addToCart, toggleFavorite, isFavorite }) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getImagesById = (id) => {
    return imagesById[id] || [];
  };

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:3000/products');
        const foundProduct = response.data.find((p) => p.id === parseInt(productId, 10));
        if (foundProduct) {
          const productImages = getImagesById(foundProduct.id);
          setProduct({
            ...foundProduct,
            images: productImages,
          });
        } else {
          setError('Producto no encontrado.');
        }
      } catch (err) {
        console.error('Error fetching product:', err);
        setError('Error al cargar el producto.');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  const changeImage = (direction) => {
    if (product && product.images && product.images.length > 0) {
      setCurrentIndex((prevIndex) => {
        const newIndex =
          (prevIndex + direction + product.images.length) % product.images.length;
        return newIndex;
      });
    }
  };

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/cart');
  };

  if (loading) {
    return <p>Cargando producto...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div className="product-details-container">
      <div className="product-images">
        {product.images && product.images.length > 0 ? (
          <>
            <div className="slider">
              <img
                src={product.images[currentIndex]}
                alt={product.name}
                className="product-image"
              />
            </div>
            <button className="prev" onClick={() => changeImage(-1)}>
              &#10094;
            </button>
            <button className="next" onClick={() => changeImage(1)}>
              &#10095;
            </button>
          </>
        ) : (
          <p>No hay imágenes disponibles.</p>
        )}
      </div>
      <div className="product-info">
        <h1 className="product-name">{product.name}</h1>
        <p className="product-description">{product.description}</p>
        <p className="product-price">Precio: ${product.price}</p>
        <div className="product-buttons">
          <button className="cart-button" onClick={handleAddToCart}>
            Añadir al carrito
          </button>
          <button
            className={`favorite-button ${isFavorite(product.id) ? 'active' : ''}`}
            onClick={() => toggleFavorite(product)}
          >
            {isFavorite(product.id) ? 'Quitar de favoritos' : 'Añadir a favoritos'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
