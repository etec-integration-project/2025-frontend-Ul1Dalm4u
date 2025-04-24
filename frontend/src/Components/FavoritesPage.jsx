import React from 'react';
import ProductCard from './ProductCard'; // Importamos el componente ProductCard
import './FavoritesPage.css';

const FavoritesPage = ({ favorites, onRemoveFromFavorites, onAddToCart }) => {
  if (favorites.length === 0) {
    return <p>No tienes productos en favoritos.</p>;
  }

  return (
    <div className="favorites-page-container">
      <h1>Productos en Favoritos</h1>
      <div className="favorites-grid">
        {favorites.map((product) => (
          <div key={product.id} className="favorite-item">
            <ProductCard
              productId={product.id}
              productImages={product.images}
              productName={product.name}
              productDescription={product.description}
              productPrice={product.price}
            />
            <div className="favorite-item-buttons">
              <button
                onClick={() => onAddToCart(product)}
                className="add-to-cart-button"
              >
                Añadir al Carrito
              </button>
              <button
                onClick={() => onRemoveFromFavorites(product.id)}
                className="remove-favorite-button"
              >
                Quitar de Favoritos
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
