import styled from "styled-components";

export const CardWrapper = styled.button`
  width: 100%;
  height: 80px;
  border-radius: 10px;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #696969;
  padding: 10px;
  margin: 10px 0;
  cursor: pointer;
  transition: 0.5s all;
  background: #eed6d3;
  outline: none;

  &:hover {
    background: #e8b4b8;
    transform: scale(1.02);
  }
`;
export const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 0.8;
`;
export const CardIcon = styled.div`
  flex: 0.1;
`;
export const CardDesc = styled.div`
  flex: 0.9;
`;
export const CardAdditional = styled.div`
  flex: 0.2;
`;
export const CardTitle = styled.p`
  font-size: 20px;
  line-height: 20px;
  font-weight: bold;
`;
export const CardSubTitle = styled.p`
  font-size: 12px;
  line-height: 10px;
`;
