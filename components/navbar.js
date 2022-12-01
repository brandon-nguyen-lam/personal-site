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


const LinkItem = ({ href, path, children }) => {
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        color={"#202023"}
        >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
    position="fixed"
    as="nav"
    w="108%"
    bg={useColorModeValue("#white", "white")}
    zIndex={2}
    borderColor="#232320"
    borderBottomWidth="1px"
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Link href="/" scroll={false}>
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <HStack paddingLeft={25} justifyContent="flex-start">
              <Image src={"/images/peepoSit.png"}
                     width={10} height={10} />
                <Text color={useColorModeValue("black", "black")}
                      fontFamily={'M PLUS Rounded 1c'}
                      fontWeight="Bold"
                      ml={3}
                      px={1}
                >
                  Brandon Lam
                </Text>
            </HStack>
          </Heading>
        </Flex>
        </Link>

        <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        justifyContent = "flex-end"
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
        >
          <Link as={NextLink} href="/projects" color="black" onHover={{textDecoration:"underline"}} passHref>
            Projects
          </Link>
          <Link as={NextLink} href="/blog" color="black" onHover={{textDecoration:"underline"}} passHref>
            Blog
          </Link>
          <Link as={NextLink} href="/contact" color="black" onHover={{textDecoration:"underline"}} passHref>
            Contact
          </Link>
        </Stack>

        <Box flex={1} align={"left"} >
          <Box ml={2} display={{base: 'inline-block', md: 'none'}}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label={"Options"}
              />
              <MenuList>
              <NextLink href="/" passHref>
                <MenuItem>Home</MenuItem>
              </NextLink>
              <NextLink href="/projects" passHref>
                <MenuItem>Projects</MenuItem>
              </NextLink>
              <NextLink href="/blog" passHref>
                <MenuItem>Blog</MenuItem>
              </NextLink>
              <NextLink href="/contact" passHref>
                <MenuItem>Contact</MenuItem>
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