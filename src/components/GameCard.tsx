import type { Game } from '@/hooks/useGames'
import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react'
import PlatFormIconList from './PlatFormIconList'
interface GameCardProps{
    game:Game
}
const GameCard = ({game}:GameCardProps) => {
  return (
    <>
        <Card.Root borderRadius={"2×1"} overflow={'hidden'}>
            <Image src={game.background_image}/>
            <CardBody>
                <Heading>{game.name}</Heading>
                <PlatFormIconList platforms={game.platforms.map((platform)=>platform.platform)}/>
            </CardBody>
        </Card.Root>
    </>
  )
}

export default GameCard
