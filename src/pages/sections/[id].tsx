import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import Data from "components/data";
import { getMenuById } from "services/menu";
import { API_ROUTES } from "constants/api-routes";
import { Flex, Container } from "../../modules/styles/section.styles";
import { ISection } from "@types";
import { SectionPageProps } from "types/section.types";
import { useMenu } from "hooks/use-menu";

const SectionPage: NextPage<SectionPageProps> = ({ menu }) => {
  const [open, setOpen] = useState<boolean>(false);

  // function getParent() {
  //   if (typeof menu.parent === null) {
  //     return undefined;
  //   }
  //   if (typeof menu.parent !== null) {
  //     return menu.parent;
  //   }
  // }

  // const parent = getParent();

  // const childrens = parent?.childrens;

  const childrens = menu.parent.childrens || {};

  // break

  const { id, title } = menu;

  const sections = menu.page.sections || {};

  console.log(menu);

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

          <div className="wrapper">
            <h1>{title}</h1>
            <div>
              {sections.map(
                (section: ISection) =>
                  !section.parent_id && (
                    <Data key={section.id} section={section} />
                  )
              )}
            </div>
          </div>
        </Container>
      </Flex>
    </>
  );
};

export default SectionPage;

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
      return undefined;
    }
  };

  return { props: { menu: await fetchMenu() } };
};
function useMenus() {
  throw new Error("Function not implemented.");
}
