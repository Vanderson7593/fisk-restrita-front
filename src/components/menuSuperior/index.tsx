import { Flex } from "modules/elements";
import { FC, useState } from "react";
import { List } from "../../modules/styles/menuSuperior.styles";
import { MenuSuperiorProps } from "../../types/menuSuperior.types";

const MenuSuperior: FC<MenuSuperiorProps> = ({ menus }) => {
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

export default MenuSuperior;
