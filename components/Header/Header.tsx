import React, { useState } from "react";
import {
  HeaderContainer,
  HeaderTitle,
  Input,
  SearchContainer,
} from "./HeaderStyle";

import { useRouter } from "next/router";
import { HeaderContainerCenter } from "../../style/Main";

interface HeaderProps {
  name?: string;
  sider?: string;
}

const Header: React.FC<HeaderProps> = ({ sider }) => {
  const [search, setSearch] = useState("");

  const router = useRouter();

  return (
    <HeaderContainer>
      <HeaderContainerCenter className={`${sider ? sider : ""}`}>
        {router.pathname === "/" ? (
          <HeaderTitle>How can we help you?</HeaderTitle>
        ) : null}

        <SearchContainer>
          <Input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for answers"
            name="search"
            id="search"
          />
          <label htmlFor="search">
            <i className="fa fa-search fa-lg"></i>
          </label>
        </SearchContainer>
      </HeaderContainerCenter>
    </HeaderContainer>
  );
};

export default Header;
