import { FC } from "react";
import Image from "next/image";
import { useTheme } from "@emotion/react";
import { Theme } from "@theme";
import { Flex } from "./avatar.styles";

const Avatar: FC = () => {
  const a = "";
  return (
    <Flex>
      <div className="avatarTitle">
        <h1>Maria Antonieta</h1>
        <h2>Gerente de RH</h2>
      </div>

      <div className="avatarImage">
        <Image src="/avatar.png" width={50} height={50} alt="user-avatar" />
      </div>
    </Flex>
  );
};
export default Avatar;
