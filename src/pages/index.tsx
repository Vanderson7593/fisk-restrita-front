/* eslint-disable object-curly-newline */
import { IMenu, INotification } from "@types";
import { Flex, Container } from "../modules/styles/Home";
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from "next";
import Head from "next/head";
import { getMenus } from "services/menu";
import Image from "next/image";
import Pdf from "components/svgs/pdf";
import Carousel from "components/carousel";

type HomeProps = {
  notifications: ReadonlyArray<INotification>;
  s;
};

const Home: NextPage<HomeProps> = () => {
  return (
    <>
      <Head>
        <title>Fisk Área Restrita</title>
      </Head>
      <Flex>
        <Container id="container-background">
          <div>
            <h1>Notificações</h1>
          </div>

          <Carousel />

          <div className="container-notice">
            <div className="box">
              <h3 className="title-notice">Circular Recente</h3>
              <div className="img-notice">
                <Pdf />
                <p>Lorem ipsum</p>
              </div>
              <div className="button-notice">
                <a href="#">download</a>
              </div>
            </div>
            <div className="box">
              <h3 className="title-notice">Adicionado Recente</h3>
              <div className="img-notice">
                <Image
                  src="/display.png"
                  alt="Circular"
                  width={70}
                  height={70}
                />
                <p>Lorem ipsum</p>
              </div>
              <div className="button-notice">
                <a href="#">download</a>
              </div>
            </div>
          </div>
        </Container>
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
