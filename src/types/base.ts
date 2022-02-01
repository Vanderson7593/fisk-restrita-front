import { EModelBase } from "constants/base";

export interface IModelBase {
  [EModelBase.ID]: number
  [EModelBase.CREATED_AT]: Date
  [EModelBase.UPDATED_AT]: Date
}