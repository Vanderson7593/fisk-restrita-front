import { EMenu } from "@constants";
import { IModelBase } from "./base";

interface IBaseMenu extends IModelBase {
  [EMenu.TITLE]: string
  [EMenu.LEVEL]: number
  [EMenu.ACTIVE]: boolean
  [EMenu.LINK]: string
}

export interface IMenu extends IBaseMenu {
  [EMenu.PARENT]: IBaseMenu
  [EMenu.CHILDRENS]: ReadonlyArray<IBaseMenu>
}