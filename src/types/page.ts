import { EPage } from "@constants";
import { IMenu } from "types/menu";
import { IModelBase } from "./base";

export interface IPage extends IModelBase {
  [EPage.TITLE]: string
  [EPage.ACTIVE]: boolean
  [EPage.CREATED_BY]: string
  [EPage.UPDATE_BY]: string
  [EPage.FINISH_DATE]: Date
  [EPage.START_DATE]: Date
  [EPage.MENU]: IMenu
}