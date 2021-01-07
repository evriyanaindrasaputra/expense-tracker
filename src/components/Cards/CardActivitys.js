import React, { useContext } from "react";
import styled from "styled-components";
import CardActivity from "./CardActivity/CardActivity";
import { ExpenseContext } from "../../context/context";

const CardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  align-items: center;
  padding: 15px 15px 0 15px;
`;

const CardActivitys = () => {
  const { activity } = useContext(ExpenseContext);
  return (
    <>
      <CardWrapper>
        {activity.map((data) => (
          <CardActivity
            key={data.id}
            title={data.type}
            desc={data.activity}
            price={data.amount}
          />
        ))}
      </CardWrapper>
    </>
  );
};

export default CardActivitys;
