import React from "react";
import Card from "../components/Card/Card";
import { HomeCardContainer } from "../style/Main";
import { Home } from "./HomeStyle";

const App: React.FC<any> = () => {
  return (
    <Home>
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
      </HomeCardContainer>
    </Home>
  );
};

export default App;
