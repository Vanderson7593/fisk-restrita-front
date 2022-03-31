import { EMenu } from "@constants";
import { IModelBase } from "./base";
import { IPage } from "./page";

interface IBaseMenu extends IModelBase {
  [EMenu.TITLE]: string;
  [EMenu.LEVEL]: number;
  [EMenu.ACTIVE]: boolean;
  [EMenu.LINK]: string;
  [EMenu.CHILDRENS]: any;
  [EMenu.PARENT_ID]: number;
  [EMenu.ICON]: any;
  [EMenu.PAGE]: IPage;
}

export interface IMenu extends IBaseMenu {
  [EMenu.PARENT]: IBaseMenu;
  [EMenu.CHILDRENS]: ReadonlyArray<IBaseMenu>;
}
