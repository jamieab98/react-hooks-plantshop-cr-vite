import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState } from "react";

function PlantPage() {

  const [userSearch, setUserSearch] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(null);
  const [plants, setPlants] = useState([]);
  const [plantsList, setPlantsList] = useState([]);
  

  function handleSubmit(e) {
    e.preventDefault();
    const newPlant = {
      "name": name,
      "image": image,
      "price": price,
    };
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
    .then(response => {
      if (!response.ok) {console.log("something wrong with fetch")}
      return response.json()
    })
    .then((addedPlant) => {
      setPlantsList((prevPlantsList) => [...prevPlantsList, addedPlant]);
    })
    .catch(error => console.log(error))
  }


  return (
    <main>
      <NewPlantForm setName={setName} setImage={setImage} setPrice={setPrice} handleSubmit={handleSubmit} plants={plants} setPlants={setPlants}/>
      <Search setUserSearch={setUserSearch}/>
      <PlantList userSearch={userSearch} plants={plants} setPlants={setPlants}/>
    </main>
  );
}

export default PlantPage;
