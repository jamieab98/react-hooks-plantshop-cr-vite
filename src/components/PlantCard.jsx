import React from "react";

function PlantCard({p}) {
  return (
    <li className="card" data-testid={p.id}>
      <img src={p.image} alt={p.name} />
      <h4>{p.name}</h4>
      <p>Price: {p.price}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
