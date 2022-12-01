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

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        target={target}
        {...props}
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
    bg={useColorModeValue("#5f967c", "#5f967c")}
    style={{ backdropFilter: 'blur(10px)' }}
    zIndex={2}
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
            <HStack>
              <Image src={"/images/peepoSit.png"}
                     width={10} height={10} />
              <Text color={useColorModeValue('gray.800', 'whiteAlpha.900')}
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
          <LinkItem href="/projects" path={path}>
            Projects
          </LinkItem>
          <LinkItem href="/blog" path={path}>
            Blog
          </LinkItem>
          <LinkItem href="/contact" path={path}>
            Contact
          </LinkItem>
        </Stack>

        <Box flex={1} align={"left"}>
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