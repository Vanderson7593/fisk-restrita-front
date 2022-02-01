import { Search } from "@svgs";
import { FC } from "react";
import { Flex, View, Input } from "../../modules/elements";

const SearchBar: FC = () => {
  const a = "";

  return (
    <Flex
      boxShadow="true"
      borderRadius="30px"
      padding="10px"
      alignItems="center"
    >
      <View>
        <Search />
      </View>
      <View ml="5px">
        <Input placeholder="Pesquisar..." />
      </View>
    </Flex>
  );
};

export default SearchBar;
