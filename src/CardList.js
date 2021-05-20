import React from "react";
import styled, { keyframes } from "styled-components";
import { rollIn } from "react-animations";
import Card from "./Card";

const RollIn = styled.div`
  animation: 1s ${keyframes`${rollIn}`};
`;
const CardList = (props) => (
  <div>
    {props.profiles.map((profile) => (
      <RollIn key={profile.id}>
        <Card
          key={profile.id}
          {...profile}
          removeProfile={props.removeProfile}
        />
      </RollIn>
    ))}
  </div>
);
export default CardList;
