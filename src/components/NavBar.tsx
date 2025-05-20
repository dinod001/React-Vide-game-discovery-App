import { HStack, Image, Text } from '@chakra-ui/react'
import image from '../assets/react.svg'

const NavBar = () => {
  return (
    <HStack>
      <Image src={image} padding={5}/>
      <Text fontSize={25} fontStyle={"bold"}>React Video Discovery APP</Text>
    </HStack>
  )
}

export default NavBar
