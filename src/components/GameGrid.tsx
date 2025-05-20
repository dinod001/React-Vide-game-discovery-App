import useGames from '@/hooks/useGames'
import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeletion from './GameCardSkeleton';
import useData from '@/hooks/useData';

const GameGrid = () => {

  const {data,error,loading}=useGames();

  const skeletons=[1,2,3,4,5,6,7,8,9,10,11,12]

  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm:1,md:2,lg:3,xl:4}} padding={"20px"} gap={"40px"}>
      
      {/* Display the skeletons while loading */}
      {loading && skeletons.map((skeleton)=> <GameCardSkeletion key={skeleton}/>)}

      {/* Display the actual games */}
        {data.map((game)=>(
            <GameCard key={game.id} game={game}/>
        ))}
    </SimpleGrid>
    </>
  )
}

export default GameGrid
