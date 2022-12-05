import {Container, Heading, SimpleGrid, Center} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbAnnote from '../public/images/Annote.png'
import thumbRollingOddsPerLevel from '../public/images/TFT.jpg'
import thumbSpotifyRecommender from '../public/images/spotify.jpg'

const Projects = () => {
  return (
    <Container bg="white">
        <Section delay={0.1}>
        <Center>
            <Heading
                as="h3"
                fontSize={35}
                mb={4}
                align="center"
                textDecoration={"underline"}
                textUnderlineOffset={"10px"}
                textDecorationColor={"#5F967C"}
                color={"#black"}
            >
                Projects
            </Heading>
        </Center>

        <Center>Here are some of my projects.</Center>
        </Section>
      <SimpleGrid columns={[1, 1, 2]} gap={6} paddingTop={"10px"}>
        <Section delay={0.2}>
          <WorkGridItem href="http://annote.live" title="Annote" thumbnail={thumbAnnote}>
            Live transcription note taking app for students with the ability to record
              and summarize lectures. First Place Overall and Best Accessibility Hack @ HackUIowa 2022.
          </WorkGridItem>
        </Section>
          <Section delay={0.2}>
              <WorkGridItem
                  href="https://github.com/brandon-nguyen-lam/TFT-Rolling-Sim"
                  title="TFT Simulator"
                  thumbnail={thumbRollingOddsPerLevel}
              >
                  Replicates Riot Game's Teamfight Tactics and calculates the odds of getting a desired unit using hypergeometric distribution.
              </WorkGridItem>
          </Section>
        <Section delay={0.4}>
            <WorkGridItem
                href="https://github.com/brandon-nguyen-lam/spotify-recommender"
                title="Spotify Recommender"
                thumbnail={thumbSpotifyRecommender}
            >
                Recommends users songs based on their listening history using Spotify API.
            </WorkGridItem>
        </Section>

    </SimpleGrid>
    </Container>
  )
}

export default Projects