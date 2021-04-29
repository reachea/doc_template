import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding 30px;
  width: 100%;
  min-height: 140px;
  border-radius: 4px;
  margin-bottom: 30px;

  box-shadow: 0px 0px 8px 1px rgba(193, 190, 198, 0.4);

  i {
    font-size: 60px;
    color: rgb(88, 58, 188);
    font-weight: 100;
  }

  :hover {
    cursor: pointer;
    box-shadow: 0px 0px 8px 1px rgba(193, 190, 198, 0.7);
  }

  @media screen and (min-width: 976px) {
    width: 48%;

  }
`;

export const CardTextContainer = styled.div`
  padding-left: 20px;

  h3 {
    margin-bottom: 8px;
    font-weight: 400;
    color: rgb(88, 58, 188);
  }

  p {
    color: rgb(139, 138, 142);
  }
`;
