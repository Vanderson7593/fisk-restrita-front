import { IMenu } from "@types";
import { ISection } from "@types";
import { ITopic } from "@types";

export interface SectionPageProps {
  menu: IMenu;
  // sections: ReadonlyArray<ISection>;
  topics: ReadonlyArray<ITopic>;
}
