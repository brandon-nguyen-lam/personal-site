import {Container, Heading, SimpleGrid, Divider, Center} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbAnnote from '../public/images/Annote.png'
import thumbRollingOddsPerLevel from '../public/images/TFT.jpg'

const Blog = () => (
    <Layout title="Works">
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
                color={"white"}
            >
                Blog
            </Heading>
            </Center>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <GridItem
                        id="inkdrop"
                        title="Memories"
                        thumbnail={thumbAnnote}>

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