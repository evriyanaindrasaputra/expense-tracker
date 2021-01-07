import React, { useContext, useState, useEffect } from "react";
import { HeadingMain } from "../../GlobalStyles";
import { CardActivity } from "../../components";
import styled from "styled-components";
import { ExpenseContext } from "../../context/context";
const HeadingIncome = styled(HeadingMain)`
  padding: 10px;
`;
const CardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  align-items: center;
  padding: 15px 15px 0 15px;
`;
const Expense = () => {
  const { expense } = useContext(ExpenseContext);
  const [acts, setActs] = useState(expense);
  useEffect(() => {
    const updateAct = () => {
      setActs(expense);
    };
    updateAct();
  }, [expense]);
  return (
    <>
      <HeadingIncome>Expense</HeadingIncome>
      <CardWrapper>
        {expense.length === 0 ? (
          <div>No Data Expense yet</div>
        ) : (
          acts.map((data) => (
            <CardActivity
              key={data.id}
              title={data.type}
              desc={data.describe}
              price={data.amount}
            />
          ))
        )}
      </CardWrapper>
    </>
  );
};

export default Expense;
