import { IMenu } from "@types";
import { API_ROUTES } from "constants/api-routes";
import { Flex } from "modules/elements";
import Link from "next/link";
import { FC, useState } from "react";
import { List } from "../../modules/styles/menuInferior.styles";
import { MenuInferiorProps } from "../../types/menuInferior.types";

const MenuInferior: FC<MenuInferiorProps> = ({ menus }) => {
  const [active, setActive] = useState<boolean>(false);

  // const handleClick = () => {
  //   if (!active) {
  //     setActive((prevState) => !prevState);
  //   } else {
  //     setActive((prevState) => !prevState);
  //   }
  // };

  return (
    <Flex flex="1">
      <List>
        {menus.map(({ id, title, link, childrens }) => (
          <li
            className={active === true ? "selectedMenu" : ""}
            key={id}
            // onClick={() => handleClick()}
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
