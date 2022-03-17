import { Search } from "@svgs";
import { FC } from "react";
import { Flex, View, Input } from "../../modules/elements";

const SearchBar: FC = () => {
  const a = "";

  return (
    <Flex
      padding="12px 40px"
      alignItems="center"
      justifyContent="space-between"
      borderRight="0.7px solid #bdbdbd"
      marginLeft="auto"
      marginRight="auto"
    >
      <View
        width="550px"
        height="50px"
        paddingTop="10px"
        paddingLeft="10px"
        border="0.7px solid #bdbdbd"
      >
        <Input placeholder="Pesquisar..." />
      </View>
      <View
        width="70px"
        height="50px"
        paddingTop="13px"
        paddingLeft="17px"
        border="0.7px solid #bdbdbd"
        marginLeft="-1px"
      >
        <Search />
      </View>
    </Flex>
  );
};

export default SearchBar;
