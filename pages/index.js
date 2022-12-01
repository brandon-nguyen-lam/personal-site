import { Container, Box, Heading, Image } from "@chakra-ui/react";

const Page = () => {
  return (
    <Container>
      <Box borderRadius={"lg"} bg={"lightgreen"} p={3} mb={6} align={"center"}>
        Hi, my name is Brandon!
      </Box>

      <Box display={{md: 'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Brandon Lam
          </Heading>
          <p>Junior at the University of Minnesota studying computer science and data science.</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page