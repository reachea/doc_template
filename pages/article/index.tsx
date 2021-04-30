import React from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { ContentMain, ContentWrapper } from "../../style/Main";

const Article: React.FC<any> = () => {
  return (
    <>
      <ContentWrapper>
        <Sidebar></Sidebar>

        <ContentMain>Container asdsaddasd</ContentMain>
      </ContentWrapper>
    </>
  );
};

export default Article;
