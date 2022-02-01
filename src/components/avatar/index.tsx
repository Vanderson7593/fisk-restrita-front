import { Flex, View } from "modules/elements";
import { FC } from "react";
import Image from "next/image";
import { useTheme } from "@emotion/react";
import { Theme } from "@theme";

const Avatar: FC = () => {
  const a = "";
  return (
    <View className="avatar">
      <Image src="/me.jpg" width={50} height={50} alt="user-avatar" />
    </View>
  );
};
export default Avatar;
