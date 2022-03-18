import { Flex } from "modules/elements";
import { FC, useState } from "react";
import { List } from "./menu.styles";
import { MenuProps } from "./menu.types";

const MenuInferior: FC<MenuProps> = ({ menus }) => {
  const [currentLi, setCurrentLi] = useState<number>();

  return (
    <Flex flex="1">
      <List>
        {menus.map(({ id, title, link }) => (
          <li
            className={currentLi === id ? "selectedMenu" : ""}
            key={id}
            onClick={() => setCurrentLi(id)}
          >
            <a href="#">{title}</a>
          </li>
        ))}
      </List>
    </Flex>
  );
};

export default MenuInferior;
