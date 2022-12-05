import {
    Box,
    Container,
    Center,
    Heading
} from "@chakra-ui/react"
import Layout from '../../components/layouts/article'
import Section from "../../components/section";

const Memories = () => (
    <Layout title="memories">
        <Container>
            <Heading
                as="h3"
                fontSize={35}
                mb={4}
                align="center"
                textDecoration={"underline"}
                textUnderlineOffset={"10px"}
                textDecorationColor={"#5F967C"}
                color={"black"}
            >
                Memories
            </Heading>
            <Section delay={0.1}>
                <Center>
                <Heading opacity={0.8} fontSize={"20px"}>
                    Brandon Lam • 5 minute read • 12/5/2022
                </Heading>
                </Center>

            </Section>
            <Section delay={0.3}>
            <Box>
                Hi there my name is Brandon and this is the first blog post
                Hi there my name is Brandon and this is the first blog post
                Hi there my name is Brandon and this is the first blog post
                Hi there my name is Brandon and this is the first blog post
                Hi there my name is Brandon and this is the first blog post
                Hi there my name is Brandon and this is the first blog post
                Hi there my name is Brandon and this is the first blog post
                Hi there my name is Brandon and this is the first blog post
                Hi there my name is Brandon and this is the first blog post
                Hi there my name is Brandon and this is the first blog post
                Hi there my name is Brandon and this is the first blog post
                Hi there my name is Brandon and this is the first blog post
                Hi there my name is Brandon and this is the first blog post
                Hi there my name is Brandon and this is the first blog post
                Hi there my name is Brandon and this is the first blog post
                Hi there my name is Brandon and this is the first blog post
            </Box>
            </Section>
        </Container>
    </Layout>
)

export default Memories
