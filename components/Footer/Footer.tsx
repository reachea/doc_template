import React from "react";
import Link from "next/link";
import {
  FooterContainer,
  FooterCopyright,
  FooterNavApp,
  FooterNavContainer,
  FooterNavLink,
} from "./FooterStyle";
import { routes } from "../../routes";

const Footer: React.FC<any> = () => {
  const menu = routes.map((route, index) => {
    return (
      <Link href={route.path} key={index}>
        <FooterNavLink>{route.name}</FooterNavLink>
      </Link>
    );
  });

  return (
    <FooterContainer>
      <FooterNavContainer>{menu}</FooterNavContainer>

      <FooterNavApp>
        <i className="fa fa-facebook fa-lg"></i>

        <i className="fa fa-facebook fa-lg"></i>

        <i className="fa fa-facebook fa-lg"></i>
      </FooterNavApp>

      <FooterCopyright>
        Made by <a>Unbound Studio</a> in Antigua Guatemala.
      </FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;
