import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { getNotifications } from "services/notifications";
import { INotification } from "types/notification";

type NotificationContextType = {
  notifications: ReadonlyArray<INotification>;
  hasNotifications: boolean;
  setRefresher: Dispatch<SetStateAction<string>>;
};

export const NotificationContext = createContext({} as NotificationContextType);

export const NotificationProvider: FC = ({ children }) => {
  const [notifications, setNotifications] = useState<
    ReadonlyArray<INotification>
  >([]);
  const [refresher, setRefresher] = useState<string>("");
  const [hasNotifications, setHasNotifications] = useState<boolean>(false);

  const fetchNotications = useCallback(async () => {
    try {
      const res = await getNotifications();
      setNotifications(res.data || []);
      const unReadedNotifications = res.data?.filter((item) => !item.read_at);
      setHasNotifications(unReadedNotifications?.length !== 0);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchNotications();
  }, [refresher, fetchNotications]);

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        hasNotifications,
        setRefresher,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
