export default function CartQuantity({ item, addToCart, removeFromCart }) {
  return (
    <div className="cart-quantity">
      <button onClick={() => removeFromCart(item)}>Remove</button>
      <span>{item.quantity}</span>
      <button onClick={() => addToCart(item)}>Add</button>
    </div>
  );
}
