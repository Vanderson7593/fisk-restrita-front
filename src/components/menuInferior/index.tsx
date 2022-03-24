import { IMenu } from "@types";
import { API_ROUTES } from "constants/api-routes";
import { Flex } from "modules/elements";
import Link from "next/link";
import { FC, useState } from "react";
import { List } from "./menuInferior.styles";
import { MenuInferiorProps } from "./menuInferior.types";

const MenuInferior: FC<MenuInferiorProps> = ({ menus }) => {
  // const [currentLi, setCurrentLi] = useState<number>();

  return (
    <Flex flex="1">
      <List>
        {menus.map(({ id, title, link, childrens }) => (
          <li
            // className={currentLi === id ? "selectedMenu" : ""}
            key={id}
            // onClick={() => setCurrentLi(id)}
          >
            <Link href={`${API_ROUTES.MENUS}/${id}`}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </List>
    </Flex>
  );
};

export default MenuInferior;
function childrens(title: string, childrens: any): void {
  throw new Error("Function not implemented.");
}
