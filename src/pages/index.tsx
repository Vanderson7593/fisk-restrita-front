/* eslint-disable object-curly-newline */
import { IMenu } from "@types";
import Data from "components/data";
import VericalMenu from "components/vertical-menu";
import { Flex, View } from "modules/elements";
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from "next";
import { getMenus } from "services/menu";
import Header from "../components/header";

type HomeProps = {
  menus: ReadonlyArray<IMenu>;
};

const Home: NextPage<HomeProps> = ({ menus }) => {
  return (
    <>
      {/* <Header menus={menus.filter((item) => item.level === 1)} />
      <VericalMenu menus={menus.filter((item) => item.level === 2)} /> */}
      <Flex mt="32px" justifyContent="space-between">
        {/* <Data /> */}
        <Flex />
      </Flex>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const fetchMenus = async () => {
    try {
      const { data: menus } = await getMenus({});
      return menus;
    } catch (error) {
      return [];
    }
  };

  return { props: { menus: await fetchMenus() } };
};
