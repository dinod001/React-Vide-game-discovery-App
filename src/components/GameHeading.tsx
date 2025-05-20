import type { GameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return (
    <Heading as={"h1"} fontWeight={"bold"} marginY={3} fontSize={"4xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
