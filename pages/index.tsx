import React from "react";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import { HomeCardContainer } from "../style/Main";
import { Home } from "./HomeStyle";

const App: React.FC<any> = () => {
  return (
    <Home>
      <Header />
      <HomeCardContainer>
        <Card
          title="Getting Started"
          description="Get started fast with installation and theme setup instructions."
          icon="fa-cog"
        ></Card>
        <Card
          title="Getting Started"
          description="Get started fast with installation and theme setup instructions."
          icon="fa-cog"
        ></Card>
        <Card
          title="Getting Started"
          description="Get started fast with installation and theme setup instructions."
          icon="fa-cog"
        ></Card>
        <Card
          title="Getting Started"
          description="Get started fast with installation and theme setup instructions."
          icon="fa-cog"
        ></Card>
      </HomeCardContainer>
    </Home>
  );
};

export default App;
