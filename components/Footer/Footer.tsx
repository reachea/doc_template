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
  return (
    <FooterContainer>
      <FooterCopyright>
        Made by <a>Unbound Studio</a> in Antigua Guatemala.
      </FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;
