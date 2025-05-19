import type { Platform } from '@/hooks/useGames'
import { HStack, Icon, Text } from '@chakra-ui/react';
import { FaWindows,FaPlaystation,FaXbox,FaApple,FaLinux,FaAndroid } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import type { IconType } from 'react-icons';

interface PlatFormIconListProps{
    platforms:Platform[];
}


const PlatFormIconList = ({platforms}:PlatFormIconListProps) => {

    //icons corresponding to the slug
    const iconsMap : {[Key:string]:IconType}={
        pc:FaWindows,
        playstation:FaPlaystation,
        xbox:FaXbox,
        nintendo:SiNintendo,
        mac:FaApple,
        linux:FaLinux,
        ios:MdPhoneIphone,
        android:FaAndroid,
        web:BsGlobe
    }
  return (
    //set iocns 
    <HStack gap={2}>
        {platforms.map((platform)=>(
        <>
            {Object.entries(iconsMap).map(([key,Icon])=>
                platform.slug===key? <Icon key={key}/>:null
            )}
        </>
        ))}
    </HStack>
  )
}

export default PlatFormIconList
