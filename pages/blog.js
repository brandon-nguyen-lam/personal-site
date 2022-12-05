import {Container, Heading, SimpleGrid, Center} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbMemories from '../public/images/memoriesthumbnail.jpg'

const Blog = () => (
    <Layout title="Blog">
        <Container>
            <Center>
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
                Blog
            </Heading>
            </Center>
            <Center>Collection of thoughts from an illiterate CS major.</Center>

            <SimpleGrid columns={[1]} gap={6} paddingTop={"10px"}>
                <Section>
                    <GridItem
                        id="memories"
                        title="Memories"
                        thumbnail={thumbMemories}>

                    </GridItem>
                </Section>
                {/*<Section>*/}
                {/*    <GridItem*/}
                {/*        id="walknote"*/}
                {/*        title="walknote"*/}
                {/*        thumbnail={thumbAnnote}*/}
                {/*    >*/}
                {/*        Music recommendation app for iOS*/}
                {/*    </GridItem>*/}
                {/*</Section>*/}

                {/*<Section delay={0.1}>*/}
                {/*    <GridItem*/}
                {/*        id="fourpainters"*/}
                {/*        title="The four painters"*/}
                {/*        thumbnail={thumbAnnote}*/}
                {/*    >*/}
                {/*        A video work generated with deep learning, imitating famous four*/}
                {/*        painters like Van Gogh*/}
                {/*    </GridItem>*/}
                {/*</Section>*/}
                {/*<Section delay={0.1}>*/}
                {/*    <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="Menkiki">*/}
                {/*        An app that suggests ramen(noodle) shops based on a given photo of*/}
                {/*        the ramen you want to eat*/}
                {/*    </WorkGridItem>*/}
                {/*</Section>*/}

            </SimpleGrid>

        </Container>
    </Layout>
)

export default Blog
// export { getServerSideProps } from '../components/chakra'