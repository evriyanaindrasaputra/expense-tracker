import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas: "Sidebar Main Action";
  grid-template-columns: 250px auto 200px;
  grid-column-gap: 1rem;
  align-items: flex-start;
`;
export const SidebarWrapper = styled.aside`
  grid-area: Sidebar;
  width: 100%;
  background: #fcfcfc;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
  position: relative;
  padding-top: 10px;
  height: 100vh;
`;
export const MainWrapper = styled.main`
  grid-area: Main;
  width: 100%;
  background: #fcfcfc;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  padding: 10px;
  height: 100%;
`;
export const ActionWrapper = styled.aside`
  grid-area: Action;
  width: 100%;
  background: #fff;
  padding: 10px;
  background: #fcfcfc;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  height: 100vh;
`;
export const Paragraph = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: normal;
  width: 100%;
  color: #696969;
  margin: 50px 0;
`;
export const HeadingMain = styled.h1`
  font-size: 1.4vw;
  font-weight: 500;
`;
