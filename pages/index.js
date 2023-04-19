import {
  Container,
  Box,
  Heading,
  Image,
  ListItem,
  List,
  Button,
  Link,
  HStack,
} from "@chakra-ui/react";
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from "../components/layouts/article";
import ExperienceBar from '../components/experiencebar'
import TypeWriter from 'typewriter-effect'
import GraphemeSplitter from "grapheme-splitter";

const Page = () => {
    const stringSplitter = string => {
        const splitter = new GraphemeSplitter();
        return splitter.splitGraphemes(string);
    }

    const typewriter = new TypeWriter('#typewriter', {
    autoStart: true,
    loop: true,
    stringSplitter
    })

  return (
    <Layout>
    <Container bg="white"
    paddingTop="15px">
      <Box fontSize={{base:"30px", md:"36px"}} justifyContent={'center'} align='center' fontFamily="Arial">
      <TypeWriter
        options={{
            strings: ['👋 Hi, I\'m Brandon Lam', '🧑‍💻 I\'m a Software Engineer', '🐸 I like frogs'],
            autoStart: true,
            loop: true,
          delay: '100',
            deleteSpeed: 'natural',

          stringSplitter
        }}
        />
      </Box>
      <Box pt={5} display={{md: 'flex'}}>
        <Box flexGrow={1}>
          <Heading
              as="h2"
              variant="page-title"
              color={"black"}
              textDecoration={"underline"}
              textUnderlineOffset={"4px"}
              textDecorationColor={"#5F967C"}
              textDecorationThickness={"4px"}
          >
            Brandon Lam
          </Heading>
          <Box color={"black"}>Aspiring Software Engineer. Currently a Junior at the University of Minnesota - Twin Cities
            double majoring in Computer Science and Data Science.</Box>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base:4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
          paddingTop={"10px"}
          >
          <Image
            src={"images/blamPhoto.png"}
            borderColor="black"
            borderWidth={2}
            borderStyle="solid"
            borderRadius="full"
            maxWidth="119px"
            display="inline-block"
            alt={"Brandon Lam"}
            />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title" color={"black"}>
          About Me
        </Heading>
        <Paragraph>
          Growing up, I always knew that engineering was my passion,
          so I participated in a variety of extracurriculars like
          Robotics, Science Olympiad, Model Rocketry, and volunteering at
          the Science Museum of Minnesota. After taking my first CS class,
          I fell in love with it and that's led me to where I am today.
          Outside of school, I enjoy playing strategy games like TFT and
          Hearthstone, where I've been top 100 in North America for both games.

        </Paragraph>
        </Section>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title" color={"black"}>
          Work Experience
        </Heading>
        <ExperienceBar/>
      </Section>
    </Container>
      </Layout>
  )
}

export default Page
export { getServerSideProps } from '../components/chakra'
