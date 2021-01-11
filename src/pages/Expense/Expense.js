import React, { useContext, useState, useEffect } from "react";
import { HeadingMain } from "../../GlobalStyles";
import { CardActivity } from "../../components";
import styled from "styled-components";
import { ExpenseContext } from "../../context/context";
import { Doughnut } from "react-chartjs-2";
import { expenseCategories } from "../../constans/categories";
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
const ChartWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
`;
const Expense = () => {
  const { expense } = useContext(ExpenseContext);
  const [acts, setActs] = useState(expense);
  const chartData = {
    datasets: [
      {
        data: acts.map((data) => data.amount),
        backgroundColor: expenseCategories.map((c) => c.color),
      },
    ],
    labels: acts.map((data) => data.describe),
  };
  useEffect(() => {
    const updateAct = () => {
      setActs(expense);
    };
    updateAct();
  }, [expense]);
  return (
    <>
      <HeadingIncome>Expense</HeadingIncome>
      <ChartWrapper>
        <Doughnut data={chartData} />
      </ChartWrapper>
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
