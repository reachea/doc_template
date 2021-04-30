import Link from "next/link";
import React, { useState } from "react";
import {
  NavList,
  ParentNavLinkContainer,
  SiderButton,
  SiderContainer,
  SiderContent,
  SubNavLink,
} from "./SiderStyle";

const Sider: React.FC<any> = () => {
  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <SiderContainer>
      <SiderButton onClick={() => setIsCollapse(!isCollapse)}>
        <i className="fa fa-bars fa-lg"></i>
        <p>Article</p>
      </SiderButton>

      <SiderContent className={`${isCollapse ? "collapse" : ""}`}>
        <ParentNavLinkContainer>
          <NavList>
            <Link href="#">
              <a className="active">What it is about?</a>
            </Link>
          </NavList>

          <SubNavLink className="navlink-sub-header">
            <NavList>
              <Link href="#">
                <a>About L192</a>
              </Link>
            </NavList>

            <NavList>
              <Link href="#">
                <a>How much does it cost?</a>
              </Link>
            </NavList>
          </SubNavLink>
        </ParentNavLinkContainer>
      </SiderContent>
    </SiderContainer>
  );
};

export default Sider;
