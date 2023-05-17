import { Flex, Box, Text, Image, Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';
import { GoKebabVertical, GoReport } from "react-icons/go"
import { AiOutlineTeam } from "react-icons/ai"

const ChatHeader = ({from_head, to_head, chatHeaderIcon}) => {
  return <article>
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

      <Menu>
        <MenuButton as={IconButton} aria-label="Options" icon={<GoKebabVertical fontSize={20} />} background={"transparent"}  />
        <MenuList width="100px" border={"none"}>
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
  </article>
};

export default ChatHeader;
