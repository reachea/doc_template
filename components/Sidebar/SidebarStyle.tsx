import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: rgb(88, 18, 188);
  color: rgba(255, 251, 249, 0.6);

  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  top: 70px;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;
