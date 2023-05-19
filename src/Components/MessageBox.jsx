import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

// const chatHeaderIcon = "https://source.unsplash.com/random?person"

const MessageBox = ({ isSent, messageContent, senderAvatar }) => {
  return <article style={{
    padding: "0 0.5rem",
  }}>
    {
    isSent 
    ? <Box bg={"#1C63D5"} borderRadius={8} borderBottomRightRadius={0} maxWidth="480px" width="85%" float={"right"} boxShadow={'2xl'} px={2} py={1} >
        <Text color={'white'}>{messageContent}</Text>
    </Box>
    :
    <div style={{
      display: "flex",
      width: "100%",
    }}>
      <Image src={senderAvatar} alt="Sender Avatar" borderRadius="full" boxSize={8} mx={2} />
      <Box bg={"#ffffff"} borderRadius={8} borderTopLeftRadius={0}  maxWidth="480px" width="80%" float={"left"} boxShadow={'2xl'} px={2} py={1}>
          <Text color={"#606060"}>{messageContent}</Text>
      </Box>
    </div>
    }


  </article>
}

export default MessageBox