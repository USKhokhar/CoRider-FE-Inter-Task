import React, { useState } from 'react'
import ChatHeader from './ChatHeader'
import { Box, Input, IconButton, Menu, MenuButton, MenuList, MenuItem, Portal, InputGroup, InputRightElement } from '@chakra-ui/react';
import { AttachmentIcon } from '@chakra-ui/icons';
import {AiOutlineSend, AiOutlineFileAdd, AiOutlineCamera, AiOutlineVideoCameraAdd} from "react-icons/ai"

const MessageInput = () => {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSend = () => {
    // Handle sending the message
    console.log('Sending message:', message);
    setMessage('');
  };

  const handleAttachFile = () => {
    // Handle attaching a file
    console.log('Attaching file...');
  };

  return (
    <InputGroup 
        width={"90vw"}
        size='md'
        margin={"auto"}
        position="fixed"
        bottom={10}
        left={0}
        right={0}
        zIndex={9999}
        display="flex"
        alignItems="center"
        bg={"white"}
        boxShadow={"2xl"}
    >
      <Input
        value={message}
        onChange={handleChange}
        placeholder="Reply to @Rohit Raj"
        borderRadius="md"
        mr={2}
        border={"none"}
        outline={"none"}
      />
      <InputRightElement width='5rem' pr={4}>
        <Menu>
            <MenuButton as={IconButton} aria-label="Attach file" icon={<AttachmentIcon  />} bg={"transparent"}/>
            <MenuList minWidth="120px" bg={"#008000"} borderRadius={24} display={"flex"} justifyContent={"center"} alignItems={"center"} align={"center"}>
                <MenuItem background={"transparent"} justifySelf={"center"} align={"center"} width={1/3} onClick={handleAttachFile}><AiOutlineCamera color='white' /></MenuItem>
                <MenuItem background={"transparent"} justifySelf={"center"} align={"center"} width={1/3} onClick={handleAttachFile}><AiOutlineVideoCameraAdd  color='white'/></MenuItem>
                <MenuItem background={"transparent"} justifySelf={"center"} align={"center"} width={1/3} onClick={handleAttachFile}><AiOutlineFileAdd  color='white'/></MenuItem>
            </MenuList>
        </Menu>

        <AiOutlineSend fontSize={20} />
      </InputRightElement>
    </InputGroup>
  );
};

const ChatScreen = () => {
  return <main>
    <ChatHeader 
    // props to be later changed dynamically
        chatHeaderIcon={"https://source.unsplash.com/random?grayscale"}
        from_head={"IGI Airport, T3"}
        to_head={"Sector 28"}
    />

    <MessageInput />
  </main>
}

export default ChatScreen