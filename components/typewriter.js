import GraphemeSplitter from 'grapheme-splitter'
import Typewriter from 'typewriter-effect'
import { Box } from '@chakra-ui/react'
import React from 'react'

const TypewriterComponent = () => {
  const stringSplitter = string => {
    const splitter = new GraphemeSplitter()
    return splitter.splitGraphemes(string)
  }
  return (
    <Box
      fontSize={{ base: '28px', md: '35px' }}
      justifyContent={'center'}
      align="center"
      fontFamily="Arial"
    >
      <Typewriter
        options={{
          strings: [
            "👋 Hi, I'm Brandon Lam",
            " 💻 I'm a Software Engineer",
            '🐸 I like frogs'
          ],
          autoStart: true,
          loop: true,
          delay: '100',
          deleteSpeed: 'natural',
          stringSplitter
        }}
      />
    </Box>
  )
}

export default TypewriterComponent
