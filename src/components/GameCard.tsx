import type { Game } from "@/hooks/useGames";
import getOptimizedImageUrl from "@/services/image-url";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import PlatFormIconList from "./PlatFormIconList";

interface GameCardProps {
  game: Game;
}
const GameCard = ({ game }: GameCardProps) => {
  return (
    <>
      <Card.Root
        borderRadius="xl"
        overflow="hidden"
        transition="transform 0.3s, box-shadow 0.3s"
        _hover={{
          transform: "scale(1.03)",
          boxShadow: "lg",
        }}
      >
        <Image src={getOptimizedImageUrl(game.background_image)} />
        <CardBody>
          <Heading>{game.name}</Heading>
          <HStack justifyContent={"space-between"}>
            <PlatFormIconList
              platforms={
                game.platforms &&
                game.platforms.map((platform) => platform.platform)
              }
            />
            <CriticScore criticScore={game.metacritic} />
          </HStack>
        </CardBody>
      </Card.Root>
    </>
  );
};

export default GameCard;
