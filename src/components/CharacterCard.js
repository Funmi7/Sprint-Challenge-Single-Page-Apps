import React from "react";
import styled from 'styled-components';

const CharacterCardStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  margin: 20px auto;
  background-color: black;
`;

const TextContentStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .textContent {
    margin-left: 20px;

    h3, p {
      color: white;
    }
  }
`

export default function CharacterCard(props) {
  // const {name, species, gender, image} = props
  return (
<CharacterCardStyle>
  <TextContentStyle>
    <div className="main-img">
      <img src={props.character.image} />
    </div>
    <div className="textContent">
      <h3>{props.character.name}</h3>
      <p>Specie: {props.character.species}</p>
      <p>Gender: {props.character.gender}</p>
    </div>
  </TextContentStyle>
</CharacterCardStyle>
  )
  
}
