import {
  ArrowTop,
  ArrowDown,
  Play,
  Download,
  Excel,
  Pdf,
  Word,
  Zip,
  Img,
} from "@svgs";
import { ISection, ITopic } from "@types";
import { Flex } from "modules/elements";
import Link from "next/link";
import Image from "next/image";
import { FC, useState } from "react";
import { Flex as FlexStyled, DataItem } from "./data.styles";
import SubSection from "components/subSection";
import { API_ROUTES } from "constants/api-routes";

type DataSectionProps = {
  section: ISection;
};

const Data: FC<DataSectionProps> = ({ section }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => setOpen((prevState) => !prevState);

  const sectionChildrens = section.childrens;

  const sectionTopics = section.topics;

  // console.log(section);

  console.log(sectionTopics);

  return (
    <FlexStyled flexDirection="column">
      <Flex
        width="650px"
        style={{ cursor: "pointer" }}
        onClick={() => handleClick()}
        marginBottom="16px"
      >
        <Flex
          boxShadow="data"
          height="50px"
          borderRadius="7px"
          flex="1"
          className="box"
        >
          <Flex
            justifyContent="space-between"
            flex="1"
            padding="15px"
            alignItems="center"
          >
            <p className="description">{section.title}</p>
            {open ? <ArrowTop /> : <ArrowDown />}
          </Flex>
        </Flex>
      </Flex>
      {open && (
        <Flex
          marginTop="6px"
          marginBottom="40px"
          alignSelf="center"
          flexDirection="column"
        >
          {sectionChildrens.map((sectionChildren) => (
            <li key={sectionChildren.id}>
              <SubSection sectionChildren={sectionChildren} />
            </li>
          ))}

          {sectionTopics.map((sectionTopic) => (
            <li key={sectionTopic.id}>
              <DataItem width="90px" height="40px">
                {sectionTopic.file.split(".").pop() == "vimeo" && <Play />}
                {sectionTopic.file.split(".").pop() == "pdf" && <Pdf />}
                {sectionTopic.file.split(".").pop() == "xlsx" && <Excel />}
                {sectionTopic.file.split(".").pop() == "doc" && <Word />}
                {sectionTopic.file.split(".").pop() == "zip" && <Zip />}
                {sectionTopic.file.split(".").pop() == "png" && <Img />}
                {sectionTopic.file.split(".").pop() == "jpg" && (
                  <Image
                    src={sectionTopic.file}
                    width={25}
                    height={25}
                    alt={sectionTopic.title}
                  />
                )}
              </DataItem>
              <DataItem width="276px" height="40px">
                <p>{sectionTopic.description}</p>
              </DataItem>

              <DataItem width="110px" height="40px"></DataItem>
              <DataItem width="120px" height="40px">
                <Link href={`${sectionTopic.file}`}>
                  <a target="_blank" download="">
                    <Download />
                    <p>download</p>
                  </a>
                </Link>
              </DataItem>
            </li>
          ))}
        </Flex>
      )}
    </FlexStyled>
  );
};

export default Data;
