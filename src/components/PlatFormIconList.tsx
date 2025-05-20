import type { Platform } from "@/hooks/useGames";
import { HStack } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";

interface PlatFormIconListProps {
  platforms: Platform[];
}

const PlatFormIconList = ({ platforms }: PlatFormIconListProps) => {
  //icons corresponding to the slug
  const iconsMap: { [Key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    playstation3: FaPlaystation,
    xbox360: FaXbox,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    macos: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
  };
  return (
    //set iocns
    <HStack gap={2}>
      {platforms &&
        platforms.map((platform) => (
          <>
            {Object.entries(iconsMap).map(([key, Icon]) =>
              platform.slug === key ? <Icon key={key} /> : null
            )}
          </>
        ))}
    </HStack>
  );
};

export default PlatFormIconList;
