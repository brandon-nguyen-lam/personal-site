import {Container, Heading, SimpleGrid, Divider, Box, Center} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbAnnote from '../public/images/Annote.png'
import thumbRollingOddsPerLevel from '../public/images/TFT.jpg'
import Footer from "../components/footer";

const Projects = () => {
  return (
    <Container bg="#202023">
        <Center>
            <Heading
                as="h3"
                fontSize={35}
                mb={4}
                align="center"
                textDecoration={"underline"}
                textUnderlineOffset={"10px"}
                textDecorationColor={"#5F967C"}
                color={"#ffffff"}
            >
                Projects
            </Heading>
        </Center>

      <SimpleGrid columns={[1, 1, 2]}>
        <Section>
          <WorkGridItem href="http://annote.live" title="Annote" thumbnail={thumbAnnote}>
            Live transcription note taking app.
            First place at HackUIowa.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    <SimpleGrid columns={[1, 1, 2]}>
        <Section>
          <WorkGridItem
            href="https://github.com/brandon-nguyen-lam/TFT-Rolling-Sim"
            title="TFT Simulator"
            thumbnail={thumbRollingOddsPerLevel}
            >
            Replicates Riot Game's Teamfight Tactics and calculates the odds of rolling units.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Projects