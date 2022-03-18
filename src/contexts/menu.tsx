import { createContext, FC, useCallback, useEffect, useState } from "react";
import { getMenus } from "services/menu";
import { IMenu } from "types/menu";

type MenuContextType = {
  menus: ReadonlyArray<IMenu>;
};

export const MenuContext = createContext({} as MenuContextType);

export const MenuProvider: FC = ({ children }) => {
  const [menus, setMenus] = useState<ReadonlyArray<IMenu>>([]);

  const fetchMenus = useCallback(async () => {
    try {
      const res = await getMenus({});
      setMenus(res.data || []);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchMenus();
  }, [fetchMenus]);

  return (
    <MenuContext.Provider value={{ menus }}>{children}</MenuContext.Provider>
  );
};
