import { ArrowTop, ArrowDown, Play, Download } from "@svgs";
import { ISection, ITopic } from "@types";
import { Flex } from "modules/elements";
import Link from "next/link";
import Image from "next/image";
import { FC, useState } from "react";
import { Flex as FlexStyled, DataItem } from "./data.styles";
import Pdf from "components/svgs/pdf";

type DataSectionProps = {
  topic: ITopic;
};

const Data: FC<DataSectionProps> = ({ topic }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => setOpen((prevState) => !prevState);

  const fileElement = topic.file;

  const fileSplit = fileElement.split(".");

  const fileType = fileSplit.pop();

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
            <p className="description">{topic.title}</p>
            {open ? <ArrowTop /> : <ArrowDown />}
          </Flex>
        </Flex>
      </Flex>
      {open && (
        <Flex marginTop="6px" marginBottom="45px" alignSelf="center">
          <DataItem width="90px" height="40px">
            {fileType == "vimeo" && <Play />}
            {fileType == "pdf" && <Pdf />}
            {fileType == "png" && (
              <Image
                src={topic.file}
                width={25}
                height={25}
                alt={topic.title}
              />
            )}
            {fileType == "jpg" && (
              <Image
                src={topic.file}
                width={25}
                height={25}
                alt={topic.title}
              />
            )}
          </DataItem>
          <DataItem width="276px" height="40px">
            <p>{topic.description}</p>
          </DataItem>
          <DataItem width="110px" height="40px"></DataItem>
          <DataItem width="120px" height="40px">
            <Link href={topic.file}>
              <a target="_blank" download="">
                <Download />
                <p>download</p>
              </a>
            </Link>
          </DataItem>
        </Flex>
      )}
    </FlexStyled>
  );
};

export default Data;
