import React from "react";
import {
  CardWrapper,
  CardIcon,
  CardDesc,
  CardTitle,
  CardSubTitle,
} from "./style";

const CardsCategory = (props) => {
  return (
    <>
      <CardWrapper>
        <CardIcon>Icon</CardIcon>
        <CardDesc>
          <CardTitle>{props.title}</CardTitle>
          <CardSubTitle>Rp.{props.subtitle}</CardSubTitle>
        </CardDesc>
      </CardWrapper>
    </>
  );
};

export default CardsCategory;
