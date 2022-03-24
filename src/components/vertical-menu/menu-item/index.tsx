import { ArrowTop } from "@svgs";
import { FC } from "react";
import { Item } from "./menu-item.styles";
import { MenuItemProps } from "./menu-item.types";

const MenuItem: FC<MenuItemProps> = ({ label, hasChildren }) => {
  return (
    <Item>
      <p>{label}</p>
      {/* {hasChildren && <ArrowTop />} */}
    </Item>
  );
};

export default MenuItem;
