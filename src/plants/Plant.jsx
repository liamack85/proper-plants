export default function Plant({ plant, addCart }) {
  return (
    <li className="plant">
      <figure>{plant.image}</figure>
      <p>{plant.name}</p>
      <button onClick={() => addCart(plant)}>Add to Cart</button>
    </li>
  );
}
