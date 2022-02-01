import { Settings, Bell, Power } from "@svgs";
import Avatar from "components/avatar";
import Menu from "components/menu";
import SearchBar from "components/search-bar";
import { MENUS } from "mocks/menus";
import { FC } from "react";
import { Flex, View } from "../../modules/elements";
import Logo from "../../../public/logo.svg";
import { HeaderProps } from "./header.types";

const Header: FC<HeaderProps> = ({ menus }) => {
  return (
    <Flex
      flexDirection="column"
      padding="30px"
      boxShadow="true"
      borderRadius="rounded"
    >
      <Flex flex="1" justifyContent="space-between" alignItems="center">
        <View>
          <Logo />
        </View>
        <View>
          <SearchBar />
        </View>
        <Flex alignItems="center" style={{ gap: 20 }}>
          <Settings />
          <Bell />
          <Power onClick={() => alert("DDD")} />
          <Avatar />
        </Flex>
      </Flex>
      <Flex>
        <Menu menus={menus} />
      </Flex>
    </Flex>
  );
};

export default Header;
