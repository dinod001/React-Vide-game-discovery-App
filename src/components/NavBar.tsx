import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import SearchInput from "./SearchInput";

interface NavBarProps {
  onSearch: (SearchText: string) => void;
}

const NavBar = ({ onSearch }: NavBarProps) => {
  return (
    <HStack padding={"20px"} justifyContent={"space-between"}>
      <Image
        src={logo}
        padding={5}
        height={{ base: "40px", md: "50px", lg: "90px" }}
      />
      {
        <Text fontSize={25} fontStyle={"bold"}>
          React Game Discovery APP
        </Text>
      }
      <SearchInput onSearch={(searchText) => onSearch(searchText)} />
    </HStack>
  );
};

export default NavBar;
