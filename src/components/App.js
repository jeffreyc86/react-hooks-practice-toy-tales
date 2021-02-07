import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const API = "http://localhost:3001/toys"
  const [toys, setToys] = useState([])

  useEffect(()=>{
    fetch(API)
    .then(res=>res.json())
    .then(toysArr => {
      setToys(toysArr)
    })
  }, [])

  const updateToyArr = (updatedObj) => {
    const newArray = toys.map(toy => {
      if (updatedObj.id === toy.id) {
        return updatedObj
      } else {
        return toy
      }
    })
    setToys(newArray)
  }

  function deleteToy(id){
    const newArray = toys.filter(toy => {return toy.id != id})
    setToys(newArray)
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addToy(newToy) {
    setToys([...toys, newToy])
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>{!showForm ? "Add a Toy" : "Nevermind"}</button>
      </div>
      <ToyContainer toys={toys} updateToyArr={updateToyArr} deleteToy={deleteToy}/>
    </>
  );
}

export default App;
