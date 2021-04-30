import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-right: 100px;
  padding-left: 100px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 0px) {
    max-width: 540px;
    padding: 0px 5px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
    padding: 0px 0px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
    padding-right: 0px;
    padding-left: 250px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export const ContainerCenter = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;

  @media screen and (max-width: 992px) {
    justify-content: center;
  }
`;

export const HeaderContainerCenter = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HomeCardContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;

  @media and screen (max-width: 1200px) {
    flex-wrap: no-wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
