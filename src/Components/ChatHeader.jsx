import { Flex, Box, Text, Image, Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react';
import { HamburgerIcon, AddIcon, ExternalLinkIcon, RepeatIcon, EditIcon, PhoneIcon } from '@chakra-ui/icons';
import { GoKebabVertical, GoReport } from "react-icons/go"
import { AiOutlineTeam } from "react-icons/ai"
// To be changed dynamically later on
const chatHeaderIcon = "https://source.unsplash.com/random?grayscale"

// To be changed dynamically later on
const from_head = "IGI Airport, T3"
const to_head = "Sector 28"


const ChatHeader = () => {
  return (
    <Flex align="center" justify="space-between" px={2} gap={2}>
      <Flex align="center">
        <Image src={chatHeaderIcon} alt="Chat Header Icon" borderRadius="full" boxSize={12} mx={2} />
        <Box>
          <Text>
            From <strong>{from_head}</strong>
          </Text>
          <Text>
            To <strong>{to_head}</strong>
          </Text>
        </Box>
      </Flex>

      <Menu width={"fit-content"} px={5}>
        <MenuButton as={IconButton} aria-label="Options" icon={<GoKebabVertical fontSize={20} />} background={"transparent"}  />
        <MenuList width={"fit-content"}>
          <MenuItem icon={<AiOutlineTeam />}>
            Members
          </MenuItem>
          <MenuItem icon={<PhoneIcon />}>
            Share Number
          </MenuItem>
          <MenuItem icon={<GoReport />}>
            Report
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default ChatHeader;
