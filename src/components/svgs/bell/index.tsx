import Notifications from "components/notifications";
import { useNotification } from "hooks/use-notification";
import { View } from "modules/elements";
import { FC, SVGAttributes, useState } from "react";
import { INotification } from "types/notification";
import { readNotifications } from "services/notifications";
import { v4 } from "uuid";

const Bell: FC<SVGAttributes<SVGElement>> = ({ ...rest }) => {
  const [state, setState] = useState<boolean>(false);
  const { notifications, hasNotifications, setRefresher } = useNotification();

  const onBellClick = async () => {
    setState((prevState) => !prevState);
    if (hasNotifications) {
      await readNotifications();
      setRefresher(v4());
    }
  };

  return (
    <View position="relative">
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ cursor: "pointer" }}
        {...rest}
        onClick={onBellClick}
      >
        <path
          d="M13.5 6C13.5 4.80653 13.0259 3.66193 12.182 2.81802C11.3381 1.97411 10.1935 1.5 9 1.5C7.80653 1.5 6.66193 1.97411 5.81802 2.81802C4.97411 3.66193 4.5 4.80653 4.5 6C4.5 11.25 2.25 12.75 2.25 12.75H15.75C15.75 12.75 13.5 11.25 13.5 6Z"
          stroke="#ED3237"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.2975 15.75C10.1657 15.9773 9.9764 16.166 9.74868 16.2971C9.52097 16.4283 9.2628 16.4973 9.00001 16.4973C8.73723 16.4973 8.47906 16.4283 8.25134 16.2971C8.02363 16.166 7.83437 15.9773 7.70251 15.75"
          stroke="#ED3237"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {hasNotifications && (
        <View
          position="absolute"
          width={8}
          height={8}
          top={0}
          right={0}
          borderRadius={20}
          backgroundColor="#ED3237"
        />
      )}
      {state && (
        <View position="absolute" right="-10px" top={30}>
          <Notifications notifications={notifications} />
        </View>
      )}
    </View>
  );
};

export default Bell;
