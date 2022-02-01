import { ArrowTop, ArrowDown, Play, Download } from "@svgs";
import { Flex } from "modules/elements";
import { FC, useState } from "react";
import { Title, Flex as FlexStyled, DataItem } from "./data.styles";

const Data: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <FlexStyled flexDirection="column">
      <Title>Campanha 2022</Title>
      <Flex
        width="650px"
        style={{ cursor: "pointer" }}
        onClick={() => setOpen((prevState) => !prevState)}
      >
        <Flex boxShadow="data" height="48px" borderRadius="7px" flex="1">
          <Flex
            justifyContent="space-between"
            flex="1"
            padding="15px"
            alignItems="center"
          >
            <p className="description">Apresentação da Campanha 2022</p>
            {open ? <ArrowTop color="#ED3237" /> : <ArrowDown />}
          </Flex>
        </Flex>
      </Flex>
      {open && (
        <Flex marginTop="32px" alignSelf="center">
          <DataItem>
            <Play />
          </DataItem>
          <DataItem>
            <p>Apresentação Campanha 2022</p>
          </DataItem>
          <DataItem width="110px"></DataItem>
          <DataItem>
            <Download />
            <p>Download</p>
          </DataItem>
        </Flex>
      )}
    </FlexStyled>
  );
};

export default Data;
