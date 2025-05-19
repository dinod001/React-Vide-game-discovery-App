import type { Game } from '@/hooks/useGames'
import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import PlatFormIconList from './PlatFormIconList'
import CriticScore from './CriticScore'
import getOptimizedImageUrl from '@/services/image-url'


interface GameCardProps{
    game:Game
}
const GameCard = ({game}:GameCardProps) => {
  return (
    <>
        <Card.Root borderRadius={"2×1"} overflow={'hidden'}>
            <Image src={getOptimizedImageUrl(game.background_image)}/>
            <CardBody>
                <Heading>{game.name}</Heading>
                <HStack justifyContent={'space-between'}>
                    <PlatFormIconList platforms={game.platforms.map((platform)=>platform.platform)}/>
                    <CriticScore criticScore={game.metacritic}/>
                </HStack>
            </CardBody>
        </Card.Root>
    </>
  )
}

export default GameCard
