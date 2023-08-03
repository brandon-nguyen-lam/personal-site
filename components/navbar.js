import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  HStack,
  Text,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import Logo from './logo.js'
import { Slant as Hamburger } from 'hamburger-react'
import React, { useState } from 'react';

function LinkWithAnimation({ href, color, children }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const linkStyle = {
    color,
    textDecoration: 'none',
    position: 'relative',
  };

  const underlineStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: isHovered ? '100%' : '0%',
    height: '2px',
    background: '#5F967C',
    transition: 'width 0.3s ease-in-out',
  };

  return (
      <NextLink href={href} passHref>
        <Box
            style={linkStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
          {children}
          <span style={underlineStyle} />
        </Box>
      </NextLink>
  );
}

const Navbar = props => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      zIndex={2}
      css={{ backdropFilter: 'blur(10px)' }}
      {...props}
    >
      <Container display="flex" p={2} wrap="wrap">
        <Logo />

        <Stack
            direction={{ base: 'column', md: 'row' }}
            display={{ base: 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
            justifyContent="flex-end"
            paddingLeft="120pt"
        >
          <LinkWithAnimation href="/projects" color="black">
            Projects
          </LinkWithAnimation>
          <LinkWithAnimation href="/blog" color="black">
            Blog
          </LinkWithAnimation>
          <LinkWithAnimation
              href="https://drive.google.com/file/d/1A6jiZotU6p0mUwXf1SZb_kcmsmSKAk5e/view"
              color="black"
          >
            Resume
          </LinkWithAnimation>
        </Stack>


        <Box flex={1} align={'right'}>
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<Hamburger size={20} />}
                aria-label={'Options'}
                bg="white"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem bg="white" _hover={{ bg: '#E4E8EF' }}>
                    Home
                  </MenuItem>
                </NextLink>
                <NextLink href="/projects" passHref>
                  <MenuItem bg="white" _hover={{ bg: '#E4E8EF' }}>
                    Projects
                  </MenuItem>
                </NextLink>
                <NextLink href="/blog" passHref>
                  <MenuItem bg="white" _hover={{ bg: '#E4E8EF' }}>
                    Blog
                  </MenuItem>
                </NextLink>
                <NextLink
                  href="https://drive.google.com/file/d/1K19IJUcS_7acFjE_nmrdtC7dpTkY6hdp/view?usp=sharing"
                  passHref
                >
                  <MenuItem bg="white" _hover={{ bg: '#E4E8EF' }}>
                    Resume
                  </MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
