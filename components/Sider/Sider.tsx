import React, { useState } from "react";
import { SiderButton, SiderContainer, SiderContent } from "./SiderStyle";

const Sider: React.FC<any> = () => {
  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <SiderContainer>
      <SiderButton onClick={() => setIsCollapse(!isCollapse)}>
        <i className="fa fa-bars fa-lg"></i>
        <p>Article</p>
      </SiderButton>

      <SiderContent className={`${isCollapse ? "collapse" : ""}`}>
        <i
          onClick={() => setIsCollapse(!isCollapse)}
          className="fa fa-times fa-lg"
        ></i>
      </SiderContent>
    </SiderContainer>
  );
};

export default Sider;
