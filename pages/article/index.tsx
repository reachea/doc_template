import React from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { ContentMain, ContentWrapper } from "../../style/Main";

const Article: React.FC<any> = () => {
  return (
    <>
      <Header sider="sider" />
      <ContentWrapper>
        <Sidebar></Sidebar>

        <ContentMain>Container</ContentMain>
      </ContentWrapper>
    </>
  );
};

export default Article;
