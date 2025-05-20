import { Box, Flex, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import SearchInput from "./SearchInput";

interface NavBarProps {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: NavBarProps) => {
  return (
    <Flex
      as="nav"
      direction="row"
      align="center"
      justify="space-between"
      px={{ base: 4, md: 8 }}
      py={4}
      wrap="wrap"
      width="100%"
    >
      {/* Logo container */}
      <Box>
        <Image
          src={logo2}
          height={{ base: "50px", sm: "50px", md: "100px" }}
          objectFit="contain"
        />
      </Box>
      <Box>
        <Image
          src={logo}
          height={{ base: "50px", sm: "50px", md: "100px" }}
          objectFit="contain"
        />
      </Box>

      {/* Search bar */}
      <Box flex={1} ml={{ base: 0, md: 4 }}>
        <SearchInput onSearch={onSearch} />
      </Box>
    </Flex>
  );
};

export default NavBar;
