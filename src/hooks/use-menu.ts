import { MenuContext } from "contexts/menu";
import { useContext } from "react";

export const useMenu = () => useContext(MenuContext);
