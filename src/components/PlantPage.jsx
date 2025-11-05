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
    .catch(error => console.log(error))
  }


  return (
    <main>
      <NewPlantForm setName={setName} setImage={setImage} setPrice={setPrice} handleSubmit={handleSubmit}/>
      <Search setUserSearch={setUserSearch}/>
      <PlantList userSearch={userSearch}/>
    </main>
  );
}

export default PlantPage;
