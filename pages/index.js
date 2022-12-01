import { Container, Box, Heading, Image, MenuItem, Menu, Center } from "@chakra-ui/react";
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from "../components/layouts/article";

const Page = () => {
  return (
    <Layout>
    <Container>
      {/*<Box borderRadius={"lg"} bg={"#9ccbb8"} p={3} mb={6} align={"center"}>*/}
      {/*  Hi, my name is Brandon!*/}
      {/*</Box>*/}

      <Box display={{md: 'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Brandon Lam
          </Heading>
          <p>Aspiring Software Engineer. Currently a Junior at the University of Minnesota - Twin Cities
            double majoring in Computer Science and Data Science.</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base:4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
          >
          <Image
            src={"images/blamPhoto.png"}
            borderColor="whiteAlpha.800"
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
        <Heading as="h3" variant="section-title" >
          About Me
        </Heading>
        <Paragraph>
          Growing up, I always knew that engineering was my passion,
          so I participated in a variety of extracurriculars like
          Robotics, Science Olympiad, Model Rocketry, and volunteering at
          the Science Museum of Minnesota. After taking my first CS class,
          I fell in love with it and that's led me to where I am today.
          Outside of school, I enjoy playing games like TFT and
          Hearthstone, where I've been top 100 in America in both games.
        </Paragraph>
        </Section>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title" >
          Work Experience
        </Heading>
        <Paragraph>
          <Menu>
            <MenuItem>
              Software Engineer Intern @ Securian
            </MenuItem>
            <MenuItem>
              Software Engineer Intern @ UnitedHealth Group
            </MenuItem>
            <MenuItem>
              Data Analytics Intern @ Mobalytics
            </MenuItem>
          </Menu>
        </Paragraph>
      </Section>
      <Center
      fontSize="12px"

      >Website inspired by Takuya Matsuyama</Center>
    </Container>
      </Layout>
  )
}

export default Page