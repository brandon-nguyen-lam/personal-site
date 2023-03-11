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
      <Container
        display="flex"
        p={2}
        wrap="wrap"
      >
        <Logo/>

        <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
        justifyContent="flex-end"
        paddingLeft="120pt"
        >
          <Link
              as={NextLink}
              href="/projects"
              color="black"
              style={{ textDecorationColor: "#5F967C" }}
          passHref>
            Projects
          </Link>
          <Link
              as={NextLink}
              href="/blog"
              color="black"
              style={{ textDecorationColor: "#5F967C" }}
              passHref>
            Blog
          </Link>
          <Link as={NextLink}
                href="https://github.com/brandon-nguyen-lam/personal-site"
                color="black"
                style={{ textDecorationColor: "#5F967C" }}
                passHref>
            Source
          </Link>
        </Stack>

        <Box flex={1} align={"left"} >
          <Box ml={2} display={{base: 'inline-block', md: 'none'}}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="solid"
                aria-label={"Options"}
                bg="white"
              />
              <MenuList>
              <NextLink href="/" passHref>
                <MenuItem bg="white">Home</MenuItem>
              </NextLink>
              <NextLink href="/projects" passHref>
                <MenuItem bg="white">Projects</MenuItem>
              </NextLink>
              <NextLink href="/blog" passHref>
                <MenuItem bg="white">Blog</MenuItem>
              </NextLink>
              <NextLink href="https://github.com/brandon-nguyen-lam/personal-site" passHref>
                <MenuItem bg="white">Source</MenuItem>
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