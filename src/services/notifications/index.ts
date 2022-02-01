import { API_ROUTES } from "constants/api-routes";
import { getRequest } from "services/utils";
import { NotifcationsPayload } from "./notifications.types";

export const getNotifications = () => getRequest<NotifcationsPayload>(`${API_ROUTES.NOTIFICATIONS}/1`)

export const readNotifications = () => getRequest<NotifcationsPayload>(`${API_ROUTES.NOTIFICATIONS}/read/1`)