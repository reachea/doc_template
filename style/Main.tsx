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
    padding: 0px 0px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export const ContainerCenter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  position: relative;
  width: 100%;
  padding: 0px 20px;

  @media screen and (max-width: 992px) {
    justify-content: center;
  }
`;

export const HeaderContainerCenter = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .sider {
    padding-left: 250px;
  }
`;

export const HomeCardContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;

  @media and screen (max-width: 1200px) {
    flex-wrap: no-wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ContentMain = styled.div`
  padding: 2rem 2.5rem calc(300px + 2.5rem);
  min-height: 70vh;
  max-width: 740px;
  margin-top: 70px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 992px) {
    width: 100%;
    padding: 2rem;
  }
`;
