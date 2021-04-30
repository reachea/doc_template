import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 30px;
  padding-top: 20px;
  background-color: rgb(88, 58, 188);
  margin-top: 70px;

  .sider {
    padding-left: 250px;

    @media screen and (max-width: 992px) {
      padding-left: 0px;
    }
  }
`;

// #c0392b

export const HeaderTitle = styled.div`
  font-size: 32px;
  color: rgba(255, 251, 249, 1);
  height: 70px;

  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 768px) {
    font-size: 28px;
    justify-content: center;
    text-align: center;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100px;

  display: flex;
  flex-direction: row;
  align-items: center;

  i {
    position: absolute;
    top: 38px;
    left: 14px;
    font-size: 24px;
    font-weight: 100;
    color: rgba(255, 251, 249, 0.8);

    cursor: text;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 60px;
  background-color: rgb(121, 97, 201);
  border: none;
  border-radius: 4px;
  font-size: 16px;
  color: rgba(255, 251, 249, 0.6);
  padding-left: 50px;

  :focus {
    border: none;
  }

  :focus-visible {
    border: none;
    outline: none;
  }

  ::placeholder {
    color: rgba(255, 251, 249, 0.6);
  }
`;
