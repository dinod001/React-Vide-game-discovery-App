import { Input, Box } from "@chakra-ui/react";
import React, { useRef } from "react";

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Box
      as="form"
      onSubmit={(e) => {
        e.preventDefault();
        if (inputRef.current) onSearch(inputRef.current.value);
      }}
      width="100%"
      display="flex"
      justifyContent={{ base: "center", md: "flex-end" }}
      px={{ base: 4, md: 8 }} // horizontal padding
      py={{ base: 3, md: 4 }} // vertical padding
      mb={4}
    >
      <Input
        ref={inputRef}
        width={{ base: "100%", sm: "80%", md: "40%", lg: "30%" }}
        borderWidth={2}
        borderColor="white"
        borderRadius="full"
        variant="outline"
        placeholder="Search..."
      />
    </Box>
  );
};

export default SearchInput;
