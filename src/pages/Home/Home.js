import React, { useContext, useState, useEffect } from "react";
import { CardCategory, Search, CardActivity } from "../../components";
import styled from "styled-components";
import { HeadingMain } from "../../GlobalStyles";
import { ExpenseContext } from "../../context/context";

const SearchWrapper = styled.section`
  width: 60%;
  margin: 0 auto;
`;
const HeadingHome = styled(HeadingMain)`
  padding: 5px;
`;
const CardWrapperCategory = styled.div`
  width: 100%;
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px;
  justify-content: space-between;
`;
const CardWrapperActivity = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  align-items: center;
  padding: 15px 15px 0 15px;
`;

const Home = () => {
  const { activity, balance, totalIncome, totalExpense } = useContext(
    ExpenseContext
  );
  const [acts, setActs] = useState(activity);
  const searchAct = (e) => {
    if (e.target.value === "") {
      setActs(activity);
    } else {
      setActs(
        acts.filter((act) =>
          act.describe.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
  };
  useEffect(() => {
    const updateAct = () => {
      setActs(activity);
    };
    updateAct();
  }, [activity]);
  return (
    <>
      <SearchWrapper>
        <Search searchAct={searchAct} />
      </SearchWrapper>
      <HeadingHome>Category</HeadingHome>
      <CardWrapperCategory>
        <CardCategory title="Balance" subtitle={balance} />
        <CardCategory title="Income" subtitle={totalIncome} />
        <CardCategory title="Expense" subtitle={totalExpense} />
      </CardWrapperCategory>
      <HeadingHome>Activity</HeadingHome>
      <CardWrapperActivity>
        {activity.length === 0 ? (
          <div>let's create some activity</div>
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
      </CardWrapperActivity>
    </>
  );
};

export default Home;
