import styled from "styled-components";

export const SiderContainer = styled.div`
  width: 500px;
  height: 100%;
  position: absolute;

  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;

export const SiderButton = styled.div`
  display: flex;
  flex-direction: row;
  display: none;
  position: absolute;
  left: 10px;
  color: rgba(255, 251, 249, 0.6);
  font-size: 18px;

  :hover {
    color: rgb(255, 251, 249);
    cursor: pointer;
  }

  @media screen and (max-width: 992px) {
    display: flex;
  }

  @media screen and (max-width: 546px) {
    left: 5px;
  }

  p {
    font-size: 16px;
    padding-left: 10px;
    padding-top: 2px;
  }
`;

export const SiderContent = styled.div`
  position: fixed;
  width: 300px;
  min-height: calc(100vh - 70px);
  top: 70px;
  left: -100%;
  background-color: #ffffff;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 18px;
  padding: 20px 0px;
  transition: all 0.5s ease-out;

  &.collapse {
    transition: all 0.5s ease-in;
    left: 0px;

    @media screen and (min-width: 992px) {
      left: -100%;
    }
  }
`;

export const ParentNavLinkContainer = styled.ul`
  padding: 1.5rem 0;
  list-style-type: none;
`;

export const SubNavLink = styled.ul`
  padding-left: 15px;
  list-style-type: none;

  a {
    font-size: 0.95rem;
  }
`;

export const NavList = styled.li`
  a {
    text-decoration: none;
    color: #2c3e50;
    padding: 0.35rem 1rem 0.35rem 1.25rem;
    line-height: 1.7rem;
  }

  .active {
    font-size: 1.1rem;
    color: #c0392b;
    font-weight: 700;
    border-left: 0.25rem solid #c0392b;
  }
`;
