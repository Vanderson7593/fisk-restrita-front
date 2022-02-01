import { ETopic, ETypeTopic } from "@constants";
import { IModelBase } from "./base";
import { ISection } from "./section";

export interface ITopic extends IModelBase {
  [ETopic.TITLE]: string
  [ETopic.SECTION]: ISection
  [ETopic.TYPE_TOPIC]: ITypeTopic
  [ETopic.FRANCHIESEE]: string[]
  [ETopic.PRODUCT]: string[]
  [ETopic.THUMB]: string
  [ETopic.FILE]: string
  [ETopic.DESCRIPTION]: string
  [ETopic.CREATED_BY]: string
  [ETopic.UPDATED_BY]: string
  [ETopic.START_DATE]: Date
  [ETopic.FINISH_DATE]: Date
  [ETopic.STATUS]: string
  [ETopic.ORDER_NUMBER]: number
  [ETopic.ORDER_TYPE]: string
  [ETopic.IS_INTERNACIONAL]: boolean
  [ETopic.EMAIL_NOTIFICATION]: boolean
  [ETopic.FILE_TYPE]: string
  [ETopic.DOWNLOADABLE]: boolean
  [ETopic.VIEWABLE]: boolean
}

export interface ITypeTopic {
  [ETypeTopic.NAME]: string
}