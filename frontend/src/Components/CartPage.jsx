import React from 'react';
import './CartPage.css';

const CartPage = ({ cartItems, onRemoveItem, onUpdateQuantity }) => {
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + parseFloat(item.price) * item.quantity,
      0
    );
  };

  const handleIncrement = (item) => {
    if (item.quantity < item.stock) {
      onUpdateQuantity(item.id, item.quantity + 1);
    } else {
      alert(`No puedes añadir más de ${item.stock} unidades de ${item.name}.`);
    }
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      onUpdateQuantity(item.id, item.quantity - 1);
    }
  };

  return (
    <div className="cart-page-container">
      <h1>Carrito de Compras</h1>
      {cartItems.length === 0 ? (
        <p>No tienes productos en el carrito.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.images && item.images[0]}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-info">
                <h2>{item.name}</h2>
                <p>Precio unitario: ${item.price}</p>
                <div className="quantity-container">
                  <button
                    onClick={() => handleDecrement(item)}
                    className="quantity-button"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    readOnly
                    value={item.quantity}
                    className="quantity-input"
                  />
                  <button
                    onClick={() => handleIncrement(item)}
                    className="quantity-button"
                  >
                    +
                  </button>
                </div>
                <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="remove-button"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
