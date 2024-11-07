import React, { Suspense, useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Chakra from '../components/chakra'
import Fonts from '../components/fonts'
import Layout from '../components/layouts/main'
import LoadingScreen from '../components/loadingscreen'
import NProgressWrapper from '../components/progressbar'
import '../styles/global.css'

// const useMobileCheck = () => {
//     const [isMobile, setIsMobile] = useState(false);
//
//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth < 768); // Adjust the threshold as needed
//         };
//
//         handleResize(); // Initial check
//
//         window.addEventListener("resize", handleResize);
//
//         return () => {
//             window.removeEventListener("resize", handleResize);
//         };
//     }, []);
//
//     return isMobile;
// };

function Website({ Component, pageProps, router }) {
  // const isMobile = useMobileCheck();

  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Layout router={router}>
        <NProgressWrapper />
            <Component {...pageProps} key={router.route} />
      </Layout>
    </Chakra>
  )
}

export default Website
