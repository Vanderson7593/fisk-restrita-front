import { Flex } from "modules/elements";
import { FC } from "react";
import { Container } from "./notifications.styles";
import { NotificationsProps } from "./notifications.types";
import { v4 as uuid } from "uuid";

const Notifications: FC<NotificationsProps> = ({ notifications }) => {
  return (
    <Container flexDirection="column">
      {notifications.map(({ data }) => (
        <Flex key={uuid()}>
          <p>{data.message}</p>
        </Flex>
      ))}
    </Container>
  );
};
export default Notifications;
