import React from "react";
import PlantCard from "./PlantCard";
import { useState, useEffect } from "react";

function PlantList() {

  const [plants, setPlants] = useState([])


  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(response => {
      if (!response.ok) {console.log("failed to fetch")}
      return response.json();
    })
    .then(plants => {
      setPlants(plants)
      console.log(plants)
    })
    .catch(error => console.log(error));
  }, [])



  return (
    <ul className="cards">{/* render PlantCards components in here */}
      {plants.map((p) => (
        <PlantCard />
      )) }
    </ul>
  );
}

export default PlantList;
