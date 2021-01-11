import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarWrapper = styled.nav`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: 100%;
  /* position: fixed; */
`;
export const SidebarLogo = styled(Link)`
  font-size: 1.4rem;
  line-height: 20px;
  height: 50px;
  text-align: center;
  text-decoration: none;
  color: #696969;
  font-weight: 700;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const SidebarMenus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const SidebarMenu = styled(Link)`
  margin: 10px 0 10px 0;
  /* padding: 10px 20px; */
  /* border-radius: 10px; */
  text-decoration: none;
  color: #696969;
  font-weight: 500;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.1);
    font-weight: 700;
  }
`;
