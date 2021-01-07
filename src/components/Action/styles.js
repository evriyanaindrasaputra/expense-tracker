import styled from "styled-components";

export const ActionWrapper = styled.button`
  width: 100%;
  height: 100px;
  border-radius: 10px;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #696969;
  padding: 10px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5s all;
  background: #eed6d3;
  outline: none;

  &:hover {
    background: #e8b4b8;
    transform: scale(1.02);
  }
`;
export const ActionIcon = styled.div`
  flex: 0.1;
`;
export const ActionText = styled.div`
  flex: 0.9;
  font-size: 20px;
  line-height: 20px;
  font-weight: bold;
`;
export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #696969;
`;
export const Input = styled.input`
  width: 100%;
  padding: 5px;
  outline: none;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.25);
`;
export const Label = styled.label`
  font-size: 1.1rem;
  margin-top: 10px;
  font-weight: 500;
`;
export const Select = styled.select`
  width: 100%;
  padding: 5px;
  outline: none;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.25);
  color: #696969;
`;
export const ButtonSubmit = styled.input`
  margin-top: 10px;
  padding: 10px;
  color: #696969;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s all;
  background: #eed6d3;
  outline: none;
  font-size: 1.22rem;

  &:hover {
    background: #e8b4b8;
    transform: scale(1.02);
  }
`;
export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "800px",
    bottom: "auto",
    // padding: "0",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
  },
};
