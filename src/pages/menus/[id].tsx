import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";

import Data from "components/data";
import { getMenuById } from "services/menu";
import { MenuSectionPageProps } from "../../types/menuSection.types";
import { API_ROUTES } from "constants/api-routes";

import { Flex, Container } from "../../modules/styles/menuSection.styles";

const MenuSectionPage: NextPage<MenuSectionPageProps> = ({ menu }) => {
  const { childrens } = menu;

  return (
    <>
      <Head>
        <title>Fisk Área Restrita</title>
      </Head>
      <Flex>
        <Container id="container-background">
          <div className="menu-vertical">
            {childrens.map(({ id, title, link, icon }) => (
              <li key={id}>
                <Link href={`${API_ROUTES.SECTIONS}/${id}`}>
                  <a className="menuVerticalBtn">
                    <Image src={icon} alt={title} width={25} height={25} />
                    {title}
                  </a>
                </Link>
              </li>
            ))}
          </div>
          <div className="wrapper">{/* <Data /> */}</div>
        </Container>
      </Flex>
    </>
  );
};

export default MenuSectionPage;

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const { id } = ctx.query;

  console.log("id", id);

  const fetchMenu = async () => {
    try {
      const { data } = await getMenuById(id as unknown as number);
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  return { props: { menu: await fetchMenu() } };
};
