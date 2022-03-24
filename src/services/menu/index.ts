import { API_ROUTES } from "constants/api-routes";
import { getRequest } from "services/utils";
import { MenuPayload } from "./menu.types";
import { AllowedQueryKeys, formatQuery } from "../services-helpers";
import { IMenu } from "@types";
import { GetServerSidePropsContext } from "next";

export const getMenus = (query: AllowedQueryKeys) =>
  getRequest<MenuPayload>(`${API_ROUTES.MENUS}?${formatQuery(query)}`);

export const getMenuById = (id: number) =>
  getRequest<IMenu>(`${API_ROUTES.MENUS}/${id}`);

export const getMenuBySlug = (ctx?: GetServerSidePropsContext, slug?: string) =>
  getRequest<MenuPayload>(`${API_ROUTES.MENUS}/${slug}`, ctx);
