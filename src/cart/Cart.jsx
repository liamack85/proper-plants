import "./cart.css";
import CartItem from "./CartItem";

export default function Cart({ cart, removeFromCart, addToCart }) {
  return (
    <div className="cart">
      <h3>Your Cart</h3>
      {cart.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
