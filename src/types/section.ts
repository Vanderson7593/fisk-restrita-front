import { ESection } from "@constants";
import { IModelBase } from "./base";
import { IPage } from "./page";

export interface IBaseSection extends IModelBase {
  [ESection.SECTIONID]: number;
  [ESection.TITLE]: string;
  [ESection.DESCRIPTION]: string;
  // [ESection.CHILDRENS]: any;
}

// export interface ISection extends IBaseSection {
//   // [ESection.PARENT]: IBaseSection;
//   [ESection.CHILDRENS]: ReadonlyArray<IBaseSection>;
// }

export interface ISection extends IModelBase {
  [ESection.SECTIONID]: number;
  [ESection.TITLE]: string;
  [ESection.DESCRIPTION]: string;
  [ESection.PARENT]: any;
  [ESection.PARENT_ID]: number | null;
  [ESection.CHILDRENS]: any[]
}
