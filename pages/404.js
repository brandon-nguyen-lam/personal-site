import NextLink from 'next/link'
import { Box, Heading, Text, Container, Divider, Button } from '@chakra-ui/react'

const NotFound = () => {
    return (
        <Container>
            <Heading as="h1">Not Found</Heading>
            <Text>Sorry, this page does not exist.</Text>

            <Divider my={6} />

            <Box my={6} align="center">
                <NextLink href="/">
                    <Button colorScheme="green">Go Home</Button>
                </NextLink>
            </Box>

        </Container>
    )
}

export default NotFound;