import React from "react";
import PlantCard from "./PlantCard";
import { useState, useEffect } from "react";

function PlantList({userSearch, plants, setPlants}) {

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(response => {
      if (!response.ok) {console.log("failed to fetch")}
      return response.json();
    })
    .then(data => {
      setPlants(data)
    })
    .catch(error => console.log(error));
  })

  const filteredPlants = plants.filter((p) => p.name.toLowerCase().includes(userSearch.toLowerCase()));

  return (
    <ul className="cards">{/* render PlantCards components in here */}
      {filteredPlants.map((p) => (
        <PlantCard p={p} key={p.id}/>
      )) }
    </ul>
  );
}

export default PlantList;
