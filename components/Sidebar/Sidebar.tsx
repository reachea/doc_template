import Link from "next/link";
import React from "react";
import {
  NavList,
  ParentNavLinkContainer,
  SidebarContainer,
  SubNavLink,
} from "./SidebarStyle";

const Sidebar: React.FC<any> = () => {
  return (
    <SidebarContainer>
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
    </SidebarContainer>
  );
};

export default Sidebar;
