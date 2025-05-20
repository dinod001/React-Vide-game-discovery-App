import type { GameQuery } from '@/App'
import { Heading } from '@chakra-ui/react'
import React from 'react'

interface GameHeadingProps{
    gameQuery:GameQuery
}

const GameHeading = ({gameQuery}:GameHeadingProps) => {

    const heading=`${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} games`
  return (
    <Heading as={"h1"} marginY={5} fontSize={"4xl"}>
        {heading}
    </Heading>
  )
}

export default GameHeading
