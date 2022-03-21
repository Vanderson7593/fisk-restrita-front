/* eslint-disable @next/next/link-passhref */
import React from "react";
import { FC } from "react";
import { Flex, View } from "../../modules/elements";
import Avatar from "components/avatar";
import SearchBar from "components/search-bar";
import Message from "components/message";
import Logout from "components/logout";
import Logo from "components/logo";
import Menu from "components/menu";
import MenuInferior from "components/menuInferior";
import { HeaderProps } from "./header.types";
import { theme } from "@theme";
import Link from "next/link";
import { useMenu } from "hooks/use-menu";

const Header: FC<HeaderProps> = () => {
  const { menus } = useMenu();

  return (
    <Flex flexDirection="column">
      <Flex>
        <Menu menus={menus.filter((item) => item.level === 1)} />
      </Flex>
      <Flex flex="1" justifyContent="space-between" alignItems="center">
        <View width="296px" height="75px">
          <Link href="/campanha2022">
            <Logo />
          </Link>
        </View>
        <View width="41.76vw" height="75px">
          <SearchBar />
        </View>
        <View width="7.35vw" height="75px">
          <Message />
        </View>
        <View width="7.35vw" height="75px">
          <Logout />
        </View>
        <View width="21.76vw" height="75px">
          <Avatar />
        </View>
      </Flex>
      <Flex>
        <MenuInferior menus={menus.filter((item) => item.level === 2)} />
      </Flex>
    </Flex>
  );
};

export default Header;
