import useGenre, { type Genre } from "@/hooks/useGenre";
import getOptimizedImageUrl from "@/services/image-url";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: GenreListProps) => {
  const { data, loading, error } = useGenre();

  if (error) return null;

  if (loading) return <Spinner />;

  return (
    <List.Root listStyle={"none"}>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getOptimizedImageUrl(genre.image_background)}
            />

            <Button
              fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
              fontSize={selectedGenre?.id === genre.id ? "lg" : "md"}
              variant={"ghost"}
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenreList;
