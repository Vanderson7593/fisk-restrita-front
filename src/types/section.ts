import { ESection } from "@constants";
import { IModelBase } from "./base";
import { IPage } from "./page";

export interface IBaseSection extends IModelBase {
  [ESection.PAGE]: IPage
  [ESection.ACTIVE]: boolean
  [ESection.TITLE]: string
}

export interface ISection extends IBaseSection {
  [ESection.PARENT]: IBaseSection
}
