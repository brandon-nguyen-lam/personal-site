import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import Chakra from '../components/chakra'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false
});

// Custom hook to check if the device is mobile
const useMobileCheck = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Adjust the threshold as needed
        };

        handleResize(); // Initial check

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isMobile;
};

function Website({ Component, pageProps, router }) {
    const isMobile = useMobileCheck();

    return (
        <Chakra cookies={pageProps.cookies}>
            <Fonts />
            <Layout router={router}>
                <AnimatePresence
                    mode="wait"
                    initial={true}
                    onExitComplete={() => {
                        if (typeof window !== 'undefined') {
                            window.scrollTo({ top: 0 })
                        }
                    }}
                >
                    <Component {...pageProps} key={router.route} />
                    {!isMobile && <AnimatedCursor color="0, 0, 0" outerSize={0} />}
                </AnimatePresence>
            </Layout>
        </Chakra>
    );
}

export default Website;
