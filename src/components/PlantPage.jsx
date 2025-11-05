import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState } from "react";

function PlantPage() {

  const [userSearch, setUserSearch] = useState("");

  return (
    <main>
      <NewPlantForm />
      <Search setUserSearch={setUserSearch}/>
      <PlantList userSearch={userSearch} />
    </main>
  );
}

export default PlantPage;
