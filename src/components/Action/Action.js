import React, { useState, useContext } from "react";
import Modal from "react-modal";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
import { ExpenseContext } from "../../context/context";
import {
  ActionWrapper,
  ActionIcon,
  ActionText,
  customStyles,
  Form,
  Input,
  Label,
  Select,
  ButtonSubmit,
} from "./styles";

const Action = () => {
  const [isAddAct, setIsAddAct] = useState(false);
  const { register, errors, handleSubmit } = useForm();
  const { addActivity } = useContext(ExpenseContext);
  const onSubmit = (data) => {
    addActivity({
      id: uuidv4(),
      describe: data.describe,
      type: data.type,
      amount: Number(data.amount),
    });
    setIsAddAct(false);
  };
  return (
    <>
      <ActionWrapper onClick={() => setIsAddAct(!isAddAct)}>
        <ActionIcon>Icon</ActionIcon>
        <ActionText>Add Activity</ActionText>
      </ActionWrapper>
      <Modal
        id="Modal-Add-Activity"
        isOpen={isAddAct}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Modal-Add-Activity"
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setIsAddAct(!isAddAct)}
        aria={{
          labelledby: "Modal-Add-Activity",
          describedby: "For Add Your Activity",
        }}
      >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="describe">Activity</Label>
          <Input
            type="text"
            name="describe"
            placeholder="Enter your Activity ...."
            ref={register({ required: true })}
          />
          {errors.describe && "Activity is required"}
          <Label htmlFor="select">Select Category</Label>
          <Select name="type" ref={register({ required: true })}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </Select>
          <Label htmlFor="amount">Amount</Label>
          <Input
            type="number"
            name="amount"
            placeholder="0"
            ref={register({ required: true })}
          />
          {errors.amount && "Amount is required"}
          <ButtonSubmit type="submit" />
        </Form>
      </Modal>
    </>
  );
};

export default Action;
