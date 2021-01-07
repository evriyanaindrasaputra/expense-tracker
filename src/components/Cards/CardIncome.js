import React from "react";
import styled from "styled-components";
import CardActivity from "./CardActivity/CardActivity";

const CardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  align-items: center;
  padding: 15px 15px 0 15px;
`;

const CardIncome = () => {
  return (
    <>
      <CardWrapper>
        {[0, 1, 2, 3].map((index) => (
          <CardActivity key={index} />
        ))}
      </CardWrapper>
    </>
  );
};

export default CardIncome;
