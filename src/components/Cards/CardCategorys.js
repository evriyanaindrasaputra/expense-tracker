import React, { useContext } from "react";
import styled from "styled-components";
import CardCategory from "./CardCategory/CardCategory";
import { ExpenseContext } from "../../context/context";

const CardWrapper = styled.div`
  width: 100%;
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px;
  justify-content: space-between;
`;

const CardCategorys = () => {
  const { balance, totalIncome, totalExpense } = useContext(ExpenseContext);
  return (
    <CardWrapper>
      <CardCategory title="Balance" subtitle={balance} />
      <CardCategory title="Income" subtitle={totalIncome} />
      <CardCategory title="Expense" subtitle={totalExpense} />
    </CardWrapper>
  );
};

export default CardCategorys;
