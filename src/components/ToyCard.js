import React from "react";

function ToyCard({toy, updateToyArr, deleteToy}) {

  const {id, name, image, likes} = toy

  function handleLike() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'PATCH',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({likes: (likes + 1)})
    })
    .then(res=>res.json())
    .then(updatedToy => {
      updateToyArr(updatedToy)
    })
  }

  function handleDelete(){
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'DELETE'
    })
    .then(res=>res.json())
    .then(() => {
      deleteToy(id)
    })
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={handleLike} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDelete} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
