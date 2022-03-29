import { ArrowTop, ArrowDown, Play, Download } from "@svgs";
import { ISection, ITopic } from "@types";
import { Flex } from "modules/elements";
import Link from "next/link";
import { FC, useState } from "react";
import { Title, Flex as FlexStyled, DataItem } from "./data.styles";

type DataSectionProps = {
  topic: ITopic;
};

const Data: FC<DataSectionProps> = ({ topic }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => setOpen((prevState) => !prevState);

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
            <Play />
          </DataItem>
          <DataItem width="276px" height="40px">
            <p>{topic.description}</p>
          </DataItem>
          <DataItem width="110px" height="40px"></DataItem>
          <DataItem width="120px" height="40px">
            <Link href={topic.file}>
              <a>
                <Download />
                <p>Download</p>
              </a>
            </Link>
          </DataItem>
        </Flex>
      )}
    </FlexStyled>
  );
};

export default Data;
