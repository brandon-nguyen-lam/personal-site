import {Container, Box, Heading, Image, SimpleGrid} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import React from 'react'
import dynamic from 'next/dynamic'
import {WorkGridItem} from "../components/grid-item";
import supermodelThumb from "../public/images/supermodelThumb.png";
import codedexThumb from "../public/images/codedexThumb.png";


const DynamicModel = dynamic(() => import('../components/new-frog'), {
    ssr: false
    })

const DynamicTypeWriter = dynamic(() => import('../components/typewriter'), {
    ssr: false
})

const DynamicExperienceBar = dynamic(() => import('../components/experiencebar'), {
    ssr: false
})

const Page = () => {


  return (
    <Layout>
      <Container bg="white" paddingTop="15px">
        <DynamicTypeWriter/>
        <Box height="100%">
          {/*<DynamicModel />*/}
        </Box>
        <Box pt={5} display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading
              as="h2"
              variant="page-title"
              color={'black'}
              textDecoration={'underline'}
              textUnderlineOffset={'4px'}
              textDecorationColor={'#5F967C'}
              textDecorationThickness={'4px'}
            >
              Brandon Lam
            </Heading>
            <Box color={'black'}>
              Junior at the University of Minnesota - Twin Cities studying Computer Science and a fifth grade spelling bee champion.
            </Box>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
            paddingTop={'10px'}
          >
            <Image
              src={'images/blamPhoto.png'}
              borderColor="black"
              borderWidth={2}
              borderStyle="solid"
              borderRadius="full"
              maxWidth="119px"
              display="inline-block"
              alt={'Brandon Lam'}
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title" color={'black'}>
            About Me
          </Heading>
          <Paragraph>
            Hi, I'm Brandon! I'm passionate about building software that makes a difference in people's lives.
            I took my first CS class two years ago and I've been hooked ever since. Outside of coding, I enjoy
            playing strategy games like TFT and Hearthstone where I've been top 100 in both games. I also enjoy
            long walks on the beach and playing Rasputin on Just Dance.
          </Paragraph>
        </Section>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title" color={'black'}>
            Work Experience
          </Heading>
          <DynamicExperienceBar />
        </Section>
        <Heading as="h3" variant="section-title" color={'black'}>
          Check out this article about me!
        </Heading>
        <SimpleGrid columns={[1, 1, 1]} gap={6} paddingTop={'10px'}>
            <Section delay={0.05}>
              <WorkGridItem
                  href="https://www.codedex.io/blog/a-day-in-the-life-swe-intern-nasa-brandon-lam"
                  title="Codédex"
                  thumbnail={codedexThumb}
              >
              </WorkGridItem>
            </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Page
export { getServerSideProps } from '../components/chakra'
