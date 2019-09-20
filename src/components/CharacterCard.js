import React from "react";
import styled from 'styled-components';

const CharacterCardStyle = styled.div`
margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

`

export default function CharacterCard(props) {
  // const {name, species, gender, image} = props
  return (
<CharacterCardStyle>
  {/* <div> */}
  <img src={props.character.image} />
  <h5>{props.character.name}</h5>
  <p>Specie: {props.character.species}</p>
  <p>Gender: {props.character.gender}</p>
  {/* </div> */}
</CharacterCardStyle>
  )
  
}
