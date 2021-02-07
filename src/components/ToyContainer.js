import React, {useState, useEffect} from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, updateToyArr, deleteToy}) {

  const toyCards = toys.map(toy=>{
    return <ToyCard key={toy.id} toy={toy} updateToyArr={updateToyArr} deleteToy={deleteToy}/>
  })

  return (
    <div id="toy-collection">{toyCards}</div>
  );
}

export default ToyContainer;
