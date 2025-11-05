import React from "react";
import { useState } from "react";

function PlantCard({p}) {

  const [stock, setStock] = useState(true);

  function handleClick() {
    setStock((prev) => (!prev));
  }

  return (
    <li className="card" data-testid={p.id}>
      <img src={p.image} alt={p.name} />
      <h4>{p.name}</h4>
      <p>Price: {p.price}</p>
      {stock ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
