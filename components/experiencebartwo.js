import React from 'react';
import { Box, VStack } from "@chakra-ui/react";

const ExperienceBarTwo = () => {
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
                position={"absolute"}
                bg="#5F967C"
                height={600}  //+30
                width={1}
                textColor="#5F967C"
                fontSize="1px"
                align={"center"}
            >.</Box>
            <Box
                position={"absolute"}
                bottom={460} //+20
                bg="#5F967C"
                borderRadius={50}
                width={6}
                height={6}
                textColor="#5F967C"
                fontSize="1px"
                align={"center"}
            >.</Box>
        <Box
                top="580" //
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

export default ExperienceBarTwo;