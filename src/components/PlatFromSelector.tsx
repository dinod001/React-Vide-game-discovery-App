import type { Platform } from '@/hooks/useGames'
import usePlatforms from '@/hooks/usePlatforms'
import { Button, Menu, Portal } from '@chakra-ui/react'
import { IoIosArrowDropdown } from "react-icons/io";


interface PlatFromSelectorProps{
    setSelectedPaltform:(platform:Platform)=>void
    selectedPaltform:Platform | null
}

const PlatFromSelector = ({setSelectedPaltform,selectedPaltform}:PlatFromSelectorProps) => {
    const {data,error}=usePlatforms()

    if(error) return null

    return (
        <Menu.Root>
        <Menu.Trigger asChild width={"20%"}>
            <Button variant="outline" size="sm">
                {selectedPaltform ? selectedPaltform.name:"Platform Selector"}
                <IoIosArrowDropdown fontWeight={"bold"} fontSize={"20px"} />
            </Button>
            
        </Menu.Trigger>
        <Portal>
            <Menu.Positioner>
            <Menu.Content width={"20%"} overflow={"auto"}>
                {data.map((platform)=>(
                <Menu.Item value={platform.name} onClick={()=>setSelectedPaltform(platform)}>{platform.name}</Menu.Item>
                ))}
            </Menu.Content>
            </Menu.Positioner>
        </Portal>
        </Menu.Root>
    )
}

export default PlatFromSelector
