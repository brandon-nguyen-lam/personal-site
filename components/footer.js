import { Box, Container, Flex, HStack, Link, VStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <VStack>
    <Container bg ="#202023">
      <VStack justifyContent="space-between">
        <Link href="https://www.craftz.dog/">
          <Box align="center" opacity={0.3} fontSize={"sm"} color="white">
            Website inspired by Takuya Matsuyama
          </Box>
        </Link>
      <Box align= "center" opacity={0.3} fontSize={"sm"} color={"white"}> last updated 12/1/2022</Box>
      </VStack>
    </Container>
      <Box
        position="absolute"
        bg="#5F967C"
        bottom="0"
        left="0"
        width="100%"
        textColor="#5F967C"
        height="15px"
        fontSize="1px"
      >easter egg!!</Box>

    </VStack>


)
}

export default Footer