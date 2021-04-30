import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 300px;
  height: 100vh;
  background-color: rgb(255, 255, 255);
  color: rgb(110, 185, 134);
  border-right: 1px solid rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;

  position: fixed;
  top: 70px;

  @media screen and (max-width: 992px) {
    display: none;
  }

  ul {
    list-style-type: none;
  }
`;

export const ParentNavLinkContainer = styled.ul`
  padding: 1.5rem 0;
`;

export const SubNavLink = styled.ul`
  padding-left: 15px;

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
