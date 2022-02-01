import { NotificationContext } from "contexts/notification";
import { useContext } from "react";

export const useNotification = () => useContext(NotificationContext)