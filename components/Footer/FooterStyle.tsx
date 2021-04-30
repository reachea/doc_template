import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 280px;
  margin-top: 70px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgb(255, 255, 255);
`;

export const FooterNavLink = styled.a`
  color: rgba(0, 0, 0, 0.4);
  text-decoration: none;
  padding: 0px 10px;

  :hover {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.6);
  }

  @media screen and (max-width: 438px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const FooterNavContainer = styled.div``;

export const FooterNavApp = styled.div`
  i {
    color: rgba(0, 0, 0, 0.4);
    padding: 0px 30px;

    :hover {
      cursor: pointer;
      color: rgba(0, 0, 0, 0.6);
    }
  }

  @media screen and (max-width: 438px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const FooterCopyright = styled.div`
  color: rgba(0, 0, 0, 0.4);

  a {
    text-decoration: none;

    :hover {
      cursor: pointer;
      text-decoration: underline rgba(0, 0, 0, 0.6);
    }
  }
`;
