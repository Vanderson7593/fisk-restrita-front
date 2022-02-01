import { ENotification } from "constants/notification";

export interface IMESSAGE {
  [ENotification.MESSAGE]: string
}

export interface INotification {
  [ENotification.DATA]: IMESSAGE
  [ENotification.READ_AT]: Date
}