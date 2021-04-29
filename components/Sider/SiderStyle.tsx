import styled from "styled-components";

export const SiderContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
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
  position: absolute;
  width: 250px;
  min-height: 100vh;
  top: -24px;
  left: -100%;
  background-color: rgb(88, 18, 188);
  font-size: 18px;
  padding: 20px;
  transition: all 0.5s ease-out;

  &.collapse {
    transition: all 0.5s ease-in;
    left: -74px;

    @media screen and (min-width: 992px) {
      left: -100%;
    }
  }

  i {
    color: rgba(255, 251, 249, 0.6);
    position: absolute;
    right: 20px;

    :hover {
      color: rgb(255, 251, 249);
      cursor: pointer;
    }
  }
`;
