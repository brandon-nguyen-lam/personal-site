import {
  Container,
  Box,
  Heading,
  Image,
  SimpleGrid, Link
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import React from 'react'
import dynamic from 'next/dynamic'
import { WorkGridItem } from '../components/grid-item'
import codedexThumb from '../public/images/codedexThumb.png'
import thumbMeta from "../public/images/thumbMeta.jpg"
import thumbNASA from "../public/images/nasaThumb.png"
// import thumbMusk from "../public/images/thumbMusk.jpg"

const DynamicTypeWriter = dynamic(() => import('../components/typewriter'), {
  ssr: false
})

const DynamicExperienceBar = dynamic(
  () => import('../components/experiencebar'),
  {
    ssr: false
  }
)

const Page = () => {
  return (
    <Layout>
      <Container bg="white" paddingTop="15px">
        <DynamicTypeWriter />
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
              brandon lam
            </Heading>
            <Box color={'black'}>
              senior at the university of minnesota - twin cities studying
              computer science and a fifth grade spelling bee champion.
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
              src={'images/blamphoto3.jpg'}
              borderColor="#5F967C"
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
            about me
          </Heading>
          <Paragraph>
            hey i’m brandon! i build software that (hopefully) makes people’s lives better.
            outside of coding, i’m usually side questing - finding new food spots (follow me on{" "}
            <Link href={"https://beliapp.co/app/brandonlam"} style={{  textDecoration: "underline" }}>beli</Link>),
            making dumb videos, or just doing whatever sounds fun. i’ve been top 100 in tft and hearthstone,
            which is exactly as useful as it sounds.
          </Paragraph>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title" color={'black'}>
            work experience
          </Heading>
          <DynamicExperienceBar />
        </Section>
        <Heading as="h3" variant="section-title" color={'black'}>
          check out this article about me!
        </Heading>
        <SimpleGrid columns={[1, 1, 1]} gap={6} paddingTop={'10px'}>
          <Section delay={0.05}>
            <WorkGridItem
              href="https://www.codedex.io/blog/a-day-in-the-life-swe-intern-nasa-brandon-lam"
              title="codédex"
              thumbnail={codedexThumb}
            ></WorkGridItem>
          </Section>
        </SimpleGrid>

        <Heading as="h3" variant="section-title" color={'black'}>
          videos
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6} paddingTop={'10px'}>

          <Section delay={0.05}>
            <WorkGridItem
                href="https://youtu.be/Dn1SDRsaYFI?si=kFMC4FF_l7DLMwEI"
                title="a summer at meta"
                thumbnail={thumbMeta}
            >
            </WorkGridItem>
          </Section>


          <Section delay={0.05}>
            <WorkGridItem
                href="https://youtu.be/WMZBAU781Lw"
                title="nasa internship recap"
                thumbnail={thumbNASA}
            >
            </WorkGridItem>
          </Section>

          {/*<Section delay={0.05}>*/}
          {/*  <WorkGridItem*/}
          {/*      href="https://youtu.be/X_qUt3Tkl8k?si=AXivgIGBuVhK3JRd"*/}
          {/*      title="Tesla SWE Intern Day in the Life"*/}
          {/*      thumbnail={thumbMusk}*/}
          {/*  >*/}
          {/*  </WorkGridItem>*/}
          {/*</Section>*/}
        </SimpleGrid>

      </Container>
    </Layout>
  )
}

export default Page
export { getServerSideProps } from '../components/chakra'
