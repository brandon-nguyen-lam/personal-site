import { Box, Container, Link, VStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <VStack>
    <Container bg ="white">
      <VStack justifyContent="space-between">
        <Link href="https://www.craftz.dog/">
          <Box align="center" opacity={0.3} fontSize={"sm"} color="black">
            Website inspired by Takuya Matsuyama
          </Box>
        </Link>
      <Box align= "center" opacity={0.3} fontSize={"sm"} color={"black"}> last updated 3/28/2023</Box>
      </VStack>
    </Container>
      <Box
        position="fixed"
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
