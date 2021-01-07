import React from "react";
import {
  CardWrapper,
  CardContent,
  CardIcon,
  CardTitle,
  CardDesc,
  CardSubTitle,
  CardAdditional,
} from "./styles";

const CardActivity = (props) => {
  return (
    <>
      <CardWrapper>
        <CardContent>
          <CardIcon>Icon</CardIcon>
          <CardDesc>
            <CardTitle>{props.title}</CardTitle>
            <CardSubTitle>{props.desc}</CardSubTitle>
          </CardDesc>
        </CardContent>
        <CardAdditional>Rp.{props.price}</CardAdditional>
      </CardWrapper>
    </>
  );
};

export default CardActivity;
