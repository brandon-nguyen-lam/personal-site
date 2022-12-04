import Head from 'next/head'
import Navbar from '../navbar'
import Footer from '../footer'
import { Container, VStack } from "@chakra-ui/react";
import dynamic from 'next/dynamic'
import FrogLoader from "../frog-loader";

const LazyFrog = dynamic(() => import('../frog'), {
    ssr: false,
    loading: () => <FrogLoader/>
})

const Main = ({ children, router }) => {
  return (
    <VStack as="main" pb={8} bg="white">
      <Head>
        <meta name = "viewport" content = "width=device-width, initial-scale=1.0" />
        <meta name = "description" content = "Brandon Lam's personal website" />
        <meta name = "author" content = "Brandon Lam" />
        <link rel={"icon"} href={"/favicon.ico"}/>
        <link rel={"apple-touch-icon"} href={"/apple-touch-icon.png"} />


        <title>Brandon's Site</title>

      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14} bg="" justifyContent="space-between">
        <LazyFrog/>
        {children}
        <Footer />

      </Container>
    </VStack>
  )
}

export default Main