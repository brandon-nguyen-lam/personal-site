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

// const LinkItem = ({ href, path, children }) => {
//   return (
//     <NextLink href={href} passHref scroll={false}>
//       <Link
//         p={2}
//         color={"#202023"}
//         >
//         {children}
//       </Link>
//     </NextLink>
//   )
// }

const Navbar = props => {
  // const { path } = props

  return (
    <Box
    position="fixed"
    as="nav"
    w="108%"
    bg={useColorModeValue("#ffffff80", "#ffffff80")}
    zIndex={2}
    css={{ backdropFilter: 'blur(10px)' }}
    // borderColor="#232320"
    // borderBottomWidth="1px"
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
        <Link href="/" scroll="false" textUnderlineOffset={"1000px"}>
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <HStack paddingLeft={115} justifyContent="flex-start">
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
              <NextLink href="/contact" passHref>
                <MenuItem bg="white">Contact</MenuItem>
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