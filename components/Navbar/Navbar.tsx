import Link from "next/link";
import React from "react";
import styled from "styled-components";

import { useRouter } from "next/router";

import { ContainerCenter } from "../../style/Main";
import {
  Logo,
  NavbarContainer,
  NavlinkContainer,
  NavlinkStyle,
} from "./NavbarStyle";

import { routes } from "../../routes";
import Sider from "../Sider/Sider";

const Navbar: React.FC<any> = () => {
  const router = useRouter();

  const menu = routes.map((route, index) => {
    return (
      <NavLink
        name={route.name}
        path={route.path}
        key={index}
        className={router.pathname === route.path ? "active" : ""}
      />
    );
  });

  return (
    <>
      <NavbarContainer>
        <ContainerCenter>
          <Sider />
          <Logo>Guia</Logo>
          <NavlinkContainer>{menu}</NavlinkContainer>
        </ContainerCenter>
      </NavbarContainer>
    </>
  );
};

export default Navbar;

interface NavLinkProps {
  name: string;
  path: string;
  className: string;
}

const NavLink: React.FC<NavLinkProps> = ({ name, path, className }) => {
  return (
    <Link href={path}>
      <NavlinkStyle className={className}>{name}</NavlinkStyle>
    </Link>
  );
};
