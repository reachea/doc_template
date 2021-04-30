import styled from "styled-components";

export const NavbarContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 100;
  background-color: #c0392b;
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.div`
  color: rgb(255, 251, 249);
  font-size: 20px;
  font-weight: 500;
`;

export const NavlinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;

  .active {
    color: rgb(255, 251, 249);
  }

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const NavlinkStyle = styled.a`
  margin-left: 30px;
  font-size: 15px;
  color: rgba(255, 251, 249, 0.6);
  cursor: pointer;

  :hover {
    color: rgb(255, 251, 249);
  }
`;
