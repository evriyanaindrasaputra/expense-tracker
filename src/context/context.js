import React, { createContext, useReducer } from "react";
import contextReducer from "./ContextReducer";

const initialState = JSON.parse(localStorage.getItem("activity")) || [];

export const ExpenseContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [activity, dispatch] = useReducer(contextReducer, initialState);
  const deleteActivity = (id) => {
    dispatch({ type: "DELETE_ACTIVITY", payload: id });
  };
  const addActivity = (activity) => {
    dispatch({ type: "ADD_ACTIVITY", payload: activity });
  };
  const balance = activity.reduce(
    (acc, currVal) =>
      currVal.type === "expense" ? acc - currVal.amount : acc + currVal.amount,
    0
  );
  const totalIncome = activity.reduce(
    (acc, currVal) => (currVal.type === "income" ? acc + currVal.amount : acc),
    0
  );
  const totalExpense = activity.reduce(
    (acc, currVal) => (currVal.type === "expense" ? acc + currVal.amount : acc),
    0
  );
  const income = activity.filter((act) => act.type === "income");
  const expense = activity.filter((act) => act.type === "expense");
  return (
    <ExpenseContext.Provider
      value={{
        activity,
        deleteActivity,
        addActivity,
        balance,
        totalIncome,
        totalExpense,
        income,
        expense,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
