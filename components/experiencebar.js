import React from 'react';
import { Box, VStack } from "@chakra-ui/react";

const ExperienceBar = () => {
return (
    <VStack>
        <Box
        position={"absolute"}
        bg="#5F967C"
        borderRadius={50}
        width={6}
        height={6}
        textColor="#5F967C"
        fontSize="1px"
        align={"center"}
        >.</Box>
        <Box
            position={"relative"}
            bg="#5F967C"
            height={212}
            width={1}
            textColor="#5F967C"
            fontSize="1px"
            align={"center"}
            zIndex={1}
            >.</Box>
        <Box
            bottom={9}
            position={"relative"}
            bg="#5F967C"
            borderRadius={50}
            width={6}
            height={6}
            textColor="#5F967C"
            fontSize="1px"
            align={"center"}
        >.</Box>
        <Box
            position={"relative"}
            bottom={10}
            bg="#5F967C"
            height={190}
            width={1}
            textColor="#5F967C"
            fontSize="1px"
            align={"center"}
        >.</Box>
        <Box
            bottom={14}
            position={"relative"}
            bg="#5F967C"
            borderRadius={50}
            width={6}
            height={6}
            textColor="#5F967C"
            fontSize="1px"
            align={"center"}
        >.</Box>
    </VStack>
    )
}

export default ExperienceBar;