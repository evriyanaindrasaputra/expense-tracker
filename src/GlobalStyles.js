import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas: "Sidebar Main Action";
  grid-template-columns: auto 1fr auto;
  grid-column-gap: 1rem;
  min-height: 100vh;
  overflow-x: hidden;
`;
export const SidebarWrapper = styled.aside`
  grid-area: Sidebar;
  background: #fcfcfc;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
  padding-top: 10px;
  height: 100%;
  position: sticky;
  top: 0;
`;
export const MainWrapper = styled.main`
  grid-area: Main;
  background: #fcfcfc;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  padding: 10px;
  height: 100%;
  /* overflow-y: scroll; */
`;
export const ActionWrapper = styled.aside`
  grid-area: Action;
  background: #fff;
  padding: 10px;
  background: #fcfcfc;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  height: 100%;
  position: sticky;
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
