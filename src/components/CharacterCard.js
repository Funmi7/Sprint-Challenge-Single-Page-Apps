import React from "react";

export default function CharacterCard(props) {
  const {name, species, gender, image} = props
  return (
<div>
  <img src={image} />
  <h5>{name}</h5>
  <p>Specie: {species}</p>
  <p>Gender: {gender}</p>
</div>
  )
  
}
