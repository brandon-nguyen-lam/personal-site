import Section from './section'
import { Heading, SimpleGrid, AspectRatio } from '@chakra-ui/react'
import { WorkGridItem } from './grid-item'
import supermodelThumb from '../public/images/supermodelThumb.png'
import codedexThumb from '../public/images/codedexThumb.png'
import React from 'react'

const CelebrityStatus = () => {
  return (
    <Section delay={0.2}>
      <Heading as="h3" variant="section-title" color={'black'}>
        Celebrity Status
      </Heading>
      <SimpleGrid columns={[1, 1, 1]} gap={6} paddingTop={'10px'}>
        <Section delay={0.05}>
          <WorkGridItem
            href="https://www.nasa.gov/wp-content/uploads/2023/07/ps-03787-07-af-july-2023-508v2.pdf"
            title="NASA Supermodel"
            thumbnail={supermodelThumb}
          ></WorkGridItem>
        </Section>
        <Section delay={0.05}>
          <WorkGridItem
            href="https://www.codedex.io/blog/a-day-in-the-life-swe-intern-nasa-brandon-lam"
            title="Codédex"
            thumbnail={codedexThumb}
          ></WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <AspectRatio>
            <iframe src="https://open.spotify.com/embed/episode/5RCcbEJvQyCpAL9EBVI1JB?utm_source=generator&theme=0"></iframe>
          </AspectRatio>
        </Section>
      </SimpleGrid>
    </Section>
  )
}
export default CelebrityStatus
