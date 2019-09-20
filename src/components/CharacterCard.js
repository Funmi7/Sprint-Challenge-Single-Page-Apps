import React from "react";
import styled from 'styled-components';

const CharacterCardStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`

export default function CharacterCard(props) {
  const {name, species, gender, image} = props
  return (
<CharacterCardStyle>
  <div>
  <img src={image} />
  <h5>{name}</h5>
  <p>Specie: {species}</p>
  <p>Gender: {gender}</p>
  </div>
</CharacterCardStyle>
  )
  
}
