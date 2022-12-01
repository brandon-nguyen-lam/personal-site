import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name = "viewport" content = "width=device-width, initial-scale=1.0" />
        <meta name = "description" content = "Brandon Lam's personal website" />
        <meta name = "author" content = "Brandon Lam" />
        <meta rel={"icon"} href={"/favicon.ico"} type={"image/x-icon"}/>
        <meta rel={"apple-touch-icon"} href={"/apple-touch-icon.png"} />

        <title>Brandon Lam - Homepage</title>

      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main