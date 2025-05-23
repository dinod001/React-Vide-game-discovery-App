import type { GameQuery } from "@/App";
import useData from "./useData";

//platform interface for icons
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
//game interface for array
export interface Game {
  id: number;
  name: String;
  background_image: string;
  platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );

export default useGames;
