import React, { FC, useEffect } from "react";
import Head from "next/head";
import { Flex, Container } from "./menuSection.styles";
import Link from "next/link";
import Data from "components/data";
import { MenuSectionPageProps } from "./menuSection.types";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { getMenuById } from "services/menu";

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
            {childrens.map(({ id, title, link }) => (
              <li
                // className={currentLi === id ? "selectedMenu" : ""}
                key={id}
                // onClick={() => setCurrentLi(id)}
              >
                <a href="#">{title}</a>
              </li>
            ))}
          </div>
          <div className="wrapper">
            <Data />
          </div>
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
