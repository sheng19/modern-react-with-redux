import { useState } from "react";
import AnimalShow from "./AnimalShow";
import "./App.css";

function getRandomAnimal() {
  const animals = ["dog", "cat", "bird"];
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderAnimals = animals.map((animal, index) => {
    return <AnimalShow key={index} type={animal} />;
  });

  return (
    <div className="app">
      <button onClick={handleClick}>Add animal</button>
      <div className="animal-list">{renderAnimals}</div>
    </div>
  );
}

export default App;
