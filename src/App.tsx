import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatFromSelector from "./components/PlatFromSelector";
import type { Platform } from "./hooks/useGames";
import type { Genre } from "./hooks/useGenre";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  searchText: string;
}

const App = () => {
  const showSideBar = useBreakpointValue({ base: false, lg: true });

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"} position="sticky" top={0} zIndex={1} bg={"black"}>
        <NavBar
          onSearch={(searchText: string) =>
            setGameQuery({ ...gameQuery, searchText })
          }
        />
      </GridItem>

      <GridItem area={"main"} paddingY={5}>
        <GameHeading gameQuery={gameQuery} />
        <PlatFromSelector
          setSelectedPaltform={(platform) =>
            setGameQuery({ ...gameQuery, platform })
          }
          selectedPaltform={gameQuery.platform}
        />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>

      {showSideBar && (
        <GridItem
          area={"aside"}
          paddingX={"5"}
          position="sticky"
          top={0}
          height="85vh"
          overflowY="auto"
          css={{
            /*hide scroll bar*/
            "&::webkit-scrollbar": {
              display: "none",
            },
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          <GenreList
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      )}
    </Grid>
  );
};

export default App;
