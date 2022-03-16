import { Flex } from "modules/elements";
import { FC, useCallback, useState } from "react";
import MenuItem from "./menu-item";
import { VerticalMenuProps } from "./vertical-menu.types";
import { List } from "./vertical-menu.styles";
import { Back as BackSVG } from "@svgs";
import { IMenu } from "@types";

const VericalMenu: FC<VerticalMenuProps> = ({ menus }) => {
  const [currentMenus, setCurrentMenus] = useState<ReadonlyArray<IMenu>>(menus);
  const [previousSection, setPreviousSection] = useState<any[]>();
  const [title, setTitle] = useState<string>();

  const fetchMenu = useCallback(() => {}, []);

  // const onMenuClick = (label: string, childrens: ReadonlyArray<IMenu>) => {
  //   setTitle(label);
  //   // setPreviousSection(currentMenus);
  //   setCurrentMenus(childrens);
  // };

  const onMenuClick = (label: string, childrens: ReadonlyArray<IMenu>) => {
    {
      menus.map(({ id, title, link }) => (
        <li key={id}>
          <a href="#">{title}</a>
        </li>
      ));
    }
  };

  const onBackClick = () => {
    setCurrentMenus(previousSection as any);
    setPreviousSection(null as any);
    setTitle(null as any);
  };

  return (
    <Flex
      flexDirection="row"
      // width="230px"
      // height="700px"
      // position="relative"
    >
      {/* {previousSection && (
        <Back onClick={onBackClick}>
          <BackSVG />
          <p>Voltar</p>
        </Back>
      )} */}

      {/* {title && (
        <Title>
          <p>{title}</p>
        </Title>
      )} */}
      {currentMenus.map(({ id, title, childrens }) => {
        return (
          <List key={id} onClick={() => onMenuClick(title, childrens as any)}>
            <MenuItem label={title} hasChildren={childrens?.length > 0} />
          </List>
        );
      })}
    </Flex>
  );
};

export default VericalMenu;
