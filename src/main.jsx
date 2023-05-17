import React from 'react'
import { ChakraProvider, extendTheme, GlobalStyle } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const theme = extendTheme({
  fonts : {
    body: 'Mulish, sans-serif'
  },
  styles: {
    global: {
      body: {
        bg: "#FAF9F4"
      }
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
