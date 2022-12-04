import {Container, Box, Heading, Image, MenuItem, Menu, Center, Link, ListItem, List, Button, Icon} from "@chakra-ui/react";
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from "../components/layouts/article";
import { IoLogoGithub, IoMail, IoLogoLinkedin } from 'react-icons/io5'


const Page = () => {
  return (
    <Layout>
    <Container bg="white"
    paddingTop="15px">
      <Box display={{md: 'flex'}}>
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
    <Section delay={0.2}>
      <Heading as="h3" variant="section-title" color={"black"}>
        Contact
      </Heading>
      <List>
        <ListItem>
          <Link href="https://github.com/brandon-nguyen-lam" target="_blank">
            <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
            >
              @brandon-nguyen-lam
            </Button>
          </Link>
        </ListItem>
        <ListItem>
            <Link href="https://www.linkedin.com/in/brandon-nguyen-lam/" target="_blank">
                <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                    @brandon-nguyen-lam
                </Button>
            </Link>
        </ListItem>
        <ListItem>
            <Link href="mailto:brandonnguyenlam@gmail.com" target="_blank">
                <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<Icon as={IoMail} />}
                >
                    brandonnguyenlam@gmail.com
                </Button>
            </Link>
        </ListItem>
        </List>

    </Section>
    </Container>
      </Layout>
  )
}

export default Page