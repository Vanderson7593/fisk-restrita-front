import { Settings, Bell, Power } from "@svgs";
import Avatar from "components/avatar";
import Menu from "components/menu";
import SearchBar from "components/search-bar";
import { MENUS } from "mocks/menus";
import { FC } from "react";
import { Flex, View } from "../../modules/elements";
import { HeaderProps } from "./header.types";
import { theme } from "@theme";
import Message from "components/message";
import Logout from "components/logout";
import Logo from "components/logo";
import { TopList, BottomList } from "./header.styles";
import Link from "next/link";

const Header: FC<HeaderProps> = ({ menus }) => {
  return (
    <Flex flexDirection="column">
      <Flex>
        {/* <Menu menus={menus} /> */}
        <TopList>
          <li>
            <Link href="#">Inscrições Siele</Link>
          </li>
          <li>
            <Link href="#">Inscrições Met</Link>
          </li>
          <li>
            <Link href="#">Eventos</Link>
          </li>
          <li>
            <Link href="#">Cyber Adm</Link>
          </li>
          <li>
            <Link href="#">Testes Classificação</Link>
          </li>
          <li>
            <Link href="#">Webmail</Link>
          </li>
          <li>
            <Link href="#">Pesquisas</Link>
          </li>
          <li>
            <Link href="#">Currículum</Link>
          </li>
          <li>
            <Link href="#">Contato</Link>
          </li>
          <li>
            <Link href="#">Treinamento e Capacitação</Link>
          </li>
        </TopList>
      </Flex>
      <Flex flex="1" justifyContent="space-between" alignItems="center">
        {/* <View width="296px" height="75px"> */}
        <View width="296px" height="75px">
          <Logo />
        </View>
        {/* <View width="568px" height="75px"> */}
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
      <BottomList>
        <li>
          <Link href="/">Solicitações</Link>
        </li>
        <li>
          <Link href="/">Fisk web</Link>
        </li>
        <li>
          <Link href="/">Pedagógico</Link>
        </li>
        <li>
          <Link href="/marketing">Marketing</Link>
        </li>
        <li>
          <Link href="/">Manuais</Link>
        </li>
        <li>
          <Link href="/">Jurídico</Link>
        </li>
        <li>
          <Link href="/">Tecnologia</Link>
        </li>
        <li>
          <Link href="/">Franquias</Link>
        </li>
        <li>
          <Link href="/">Controladoria</Link>
        </li>
        <li>
          <Link href="/">Circulares</Link>
        </li>
        <li>
          <Link href="/">Bilingue</Link>
        </li>
        <li>
          <Link href="/">Profissionalizante</Link>
        </li>
      </BottomList>
    </Flex>
  );
};

export default Header;
