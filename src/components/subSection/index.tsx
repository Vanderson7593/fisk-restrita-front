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
import { Flex as FlexStyled, DataItem } from "./subSection.styles";
import { API_ROUTES } from "constants/api-routes";

type SubSectionProps = {
  sectionChildren: ISection;
};

const SubSection: FC<SubSectionProps> = ({ sectionChildren }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => setOpen((prevState) => !prevState);

  // const sectionChildrens = sectionChildren.childrens;

  const sectionTopics = sectionChildren.topics;

  return (
    <FlexStyled flexDirection="column">
      <Flex
        width="600px"
        style={{ cursor: "pointer" }}
        onClick={() => handleClick()}
        marginBottom="16px"
        marginRight="45px"
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
            <p className="description">{sectionChildren.title}</p>
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
          marginRight="45px"
        >
          {sectionTopics.map((sectionTopic) => (
            <li key={sectionTopic.id}>
              <DataItem width="80px" height="40px">
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
              <DataItem width="256px" height="40px">
                <p>{sectionTopic.description}</p>
              </DataItem>

              <DataItem width="90px" height="40px"></DataItem>
              <DataItem width="110px" height="40px">
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

export default SubSection;
