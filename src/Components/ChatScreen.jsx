import React, { Suspense, lazy, useEffect, useRef, useState } from 'react'
import ChatHeader from './ChatHeader'
import { Box, Input, IconButton, Menu, MenuButton, MenuList, MenuItem, Portal, InputGroup, InputRightElement, Button, Spinner } from '@chakra-ui/react';
import { AttachmentIcon } from '@chakra-ui/icons';
import {AiOutlineSend, AiOutlineFileAdd, AiOutlineCamera, AiOutlineVideoCameraAdd} from "react-icons/ai"
// import MessageBox from './MessageBox';
import axios from 'axios';

const MessageBox = lazy(() => import('./MessageBox'))

const Loader = () => {
  return <div style={{
    display: "grid",
    placeItems: "center",
  }}>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
  </div>
}

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
        bottom={5}
        left={0}
        right={0}
        zIndex={9999}
        display="flex"
        alignItems="center"
        bg={"white"}
        boxShadow={"2xl"}
        borderRadius={8}
    >
      <Input
        value={message}
        onChange={handleChange}
        placeholder="Reply to @Rohit Raj"
        borderRadius={8}
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

  const baseApi = 'http://3.111.128.67/assignment/chat?page='

  const scrollRef = useRef(null)
  const [messages, setMessages] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(0)
  const [ isLoading, setIsLoading ] = useState(false)

  
  // Scrolling to bottom when page loads

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [])


  const handleScroll = async () => {
    if (scrollRef.current.scrollTop === 0 && !isLoading) {
      setIsLoading(true);
      setCurrentPage((prevPage) => prevPage + 1);
      console.log(currentPage)
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [handleScroll]);



  useEffect(() => {
  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(baseApi + currentPage);
      const data = await response.json();

      const sortedMessages = data.chats.sort((a, b) => new Date(a.time) - new Date(b.time));

      
        setMessages((prevMessages) => [
          ...prevMessages,
          ...sortedMessages,
        ]);

         // Scroll to the bottom after new messages are appended
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  fetchData();
}, [currentPage]);

  

  return <main>
    <ChatHeader 
    // props to be later changed dynamically
        chatHeaderIcon={"https://source.unsplash.com/random?grayscale"}
        from_head={"IGI Airport, T3"}
        to_head={"Sector 28"}
    />

    <MessageInput />

    <section
      ref={scrollRef}
      style={{
        display: "grid",
        gap: "1rem",
        padding: "2rem 0 5rem 0",
        overflowY: "auto",
        height: "75vh",
    }}>
      {
        isLoading && <Spinner
        // thickness='4px'
        // display={'flex'}
        // justifyContent={"center"}
        // padding={"1.5"}
        style={{margin: "auto"}}
        speed='0.8s'
        emptyColor='gray.200'
        color='gray.800'
        size='lg'
      />
      }
      <Suspense fallback={<Loader />}>
        {messages.map((message, index) => (
            <MessageBox
              key={message.id}
              isSent={message.sender.self}
              messageContent={message.message}
              senderAvatar={message.sender.image}
            />
          ))
        }
        
      </Suspense>
    </section>

    
  </main>
}

export default ChatScreen