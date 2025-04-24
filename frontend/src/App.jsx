import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import LoginPage from './Components/Login';
import ProductPage from './Components/ProductPage';
import Header from './Components/Header';
import ProductDetailsPage from './Components/ProductDetailsPage';
import CartPage from './Components/CartPage';
import FavoritesPage from './Components/FavoritesPage';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // Cargar carrito y favoritos desde localStorage
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];

    // Verificar que los datos del carrito sean un arreglo y no nulos
    if (Array.isArray(savedCart)) {
      setCartItems(savedCart);
    }

    // Verificar que los datos de favoritos sean un arreglo y no nulos
    if (Array.isArray(savedFavorites)) {
      setFavorites(savedFavorites);
    }
  }, []);

  // Guardar carrito y favoritos en localStorage
  useEffect(() => {
    // Solo guardar en localStorage si hay elementos en el carrito o favoritos
    if (cartItems.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }

    if (favorites.length > 0) {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }, [favorites, cartItems]);

  // Agregar producto al carrito o actualizar cantidad
  const addToCart = (product) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: Math.min(item.quantity + 1, item.stock) }
            : item
        );
      } else {
        return [...prevCartItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Eliminar producto del carrito
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  // Actualizar cantidad en el carrito
  const updateCartQuantity = (productId, quantity) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Agregar o quitar un producto de favoritos
  const toggleFavorite = (product) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((item) => item.id === product.id);
      return isFavorite
        ? prevFavorites.filter((item) => item.id !== product.id)
        : [...prevFavorites, product];
    });
  };

  // Verificar si un producto está en favoritos
  const isFavorite = (productId) => {
    return favorites.some((item) => item.id === productId);
  };

  return (
    <Router>
      <Header onSearch={setSearchQuery} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems}
              onRemoveItem={removeFromCart}
              onUpdateQuantity={updateCartQuantity}
            />
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/search" element={<ProductPage searchQuery={searchQuery} />} />
        <Route path="/products" element={<ProductPage searchQuery={searchQuery} />} />
        <Route
          path="/favorites"
          element={
            <FavoritesPage
              favorites={favorites}
              onRemoveFromFavorites={(id) =>
                setFavorites(favorites.filter((item) => item.id !== id))
              }
              onAddToCart={addToCart}
            />
          }
        />
        <Route
          path="/products/:productId"
          element={
            <ProductDetailsPage
              addToCart={addToCart}
              toggleFavorite={toggleFavorite}
              isFavorite={isFavorite}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
