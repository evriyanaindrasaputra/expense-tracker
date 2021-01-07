import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: #696969;
  font-size: 1.2rem;
  border-radius: 10px;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.25);
  padding: 10px;
`;
const SearchInput = styled.input`
  width: 100%;
  margin-left: 10px;
  outline: none;
  color: #696969;
`;

const Seacrh = (props) => {
  return (
    <>
      <SearchWrapper>
        <FaSearch />
        <SearchInput
          placeholder="Search Activity"
          onChange={(e) => props.searchAct(e)}
        />
      </SearchWrapper>
    </>
  );
};

export default Seacrh;
