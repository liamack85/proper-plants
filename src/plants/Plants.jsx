import Plant from "./Plant";
import "./plants.css";

export default function Plants({ plants, addToCart }) {
  return (
    <div className="plants">
      <h3>Plant Selection</h3>
      <ul>
        {plants.map((plant) => (
          <Plant key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </ul>
    </div>
  );
}
