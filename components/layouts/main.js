import Head from 'next/head'
import Navbar from '../navbar'
import Footer from '../footer'
import { Box, Container, Flex, VStack } from "@chakra-ui/react";
import Frog from "../frog";

const Main = ({ children, router }) => {
  return (
    <VStack as="main" pb={8} bg="#ffffff">
      <Head>
        <meta name = "viewport" content = "width=device-width, initial-scale=1.0" />
        <meta name = "description" content = "Brandon Lam's personal website" />
        <meta name = "author" content = "Brandon Lam" />
        <meta rel={"icon"} href={"/favicon.ico"}/>
        <meta rel={"apple-touch-icon"} href={"/apple-touch-icon.png"} />


        <title>Brandon's Site</title>

      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14} bg="" justifyContent="space-between">
        <Frog/>
        {children}
        <Footer />

      </Container>
    </VStack>
  )
}

export default Main