import Head from 'next/head'
import React from 'react'
import Navbar from '../navbar'
import { Box } from '@chakra-ui/react'
import Footer from '../footer'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8} bg="white">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Brandon Lam's personal website" />
        <meta name="author" content="Brandon Lam" />
        <meta property="og:image" content="/images/display2.png" />
        <link rel={'icon'} href={'/favicon.ico'} />
        <link rel={'apple-touch-icon'} href={'/apple-touch-icon.png'} />
        <title>Brandon's Site</title>
      </Head>

      <Navbar path={router.asPath} />

      <Box pt={14} bg="" justifyContent="space-between">
        {children}
        <SpeedInsights />
        <Analytics />
        <Footer />
      </Box>
    </Box>
  )
}

export default Main
