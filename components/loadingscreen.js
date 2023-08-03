import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
        >
            <Box display="flex" flexDirection="column" alignItems="center">
                <motion.div
                    animate={{ rotate: 360 }} // CSS animation for rotation
                    transition={{ duration: 1.5, loop: Infinity, ease: "linear" }} // Increase duration to slow down rotation
                    style={{ fontSize: "3rem" }}
                >
                    🐸
                </motion.div>

            </Box>
        </Box>
    );
};

export default LoadingScreen;
