import { Badge } from '@chakra-ui/react'
import React from 'react'

interface CriticScoreProps{
    criticScore:number
}

const CriticScore = ({criticScore}:CriticScoreProps) => {
    let color=criticScore > 80 ? "green":criticScore > 70 ? "yellow":""
  return (
    <>
        <Badge color={color} fontSize={"16px"} padding={2} fontWeight={"bold"} borderRadius={"4px"}>{criticScore}</Badge>
    </>
  )
}

export default CriticScore
