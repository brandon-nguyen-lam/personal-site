import React from 'react'
import {
  Box,
  Button,
  UnorderedList,
  ListItem,
  Text,
  ListIcon,
  List,
  Center,
  Link,
  Heading,
  VStack
} from '@chakra-ui/react'
import {
  IoLogoGithub,
  IoMail,
  IoLogoLinkedin,
  IoDocumentText,
  IoCall,
  IoLogoYoutube,
  IoPerson,
  IoDesktopOutline,
  IoMusicalNotes
} from 'react-icons/io5'
import NextLink from 'next/link'
import Section from '../components/section'

function Links() {
  return (
    // I want to make something similar to LinkTree with a box that has an icon on the left and text on the right with
    // the colors of my website for the border of the box and the text
    <Center marginTop="50">
      <VStack>
        <Section>
          <Center>
            <Heading
              as="h3"
              fontSize={35}
              mb={4}
              align="center"
              textDecoration={'underline'}
              textUnderlineOffset={'10px'}
              textDecorationColor={'#5F967C'}
              color={'#black'}
            >
              Links
            </Heading>
          </Center>

          <Center>Here are some of my quick links.</Center>
        </Section>
        <List spacing={3}>
          <Section delay={0.1}>
            <Box
              style={{
                border: '3px solid #5F967C',
                padding: '10px',
                borderRadius: '12px'
              }}
            >
              <Link
                as={NextLink}
                href={'/'}
                passHref
                color="black"
                style={{ textDecoration: 'none' }}
              >
                <Button
                  variant="ghost"
                  color={'black'}
                  onHover={{ textDecoration: 'none' }}
                >
                  <ListItem>
                    <ListIcon as={IoPerson} color="green.500" />
                    Website
                  </ListItem>
                </Button>
              </Link>
            </Box>
          </Section>
          <Section delay={0.2}>
            <Box
              style={{
                border: '3px solid #5F967C',
                padding: '10px',
                borderRadius: '12px'
              }}
            >
              <Link
                href={'https://github.com/brandon-nguyen-lam'}
                style={{ textDecoration: 'none' }}
              >
                <Button
                  variant={'ghost'}
                  onHover={{ textDecoration: 'none' }}
                  color={'black'}
                >
                  <ListItem>
                    <ListIcon as={IoLogoGithub} />
                    GitHub
                  </ListItem>
                </Button>
              </Link>
            </Box>
          </Section>
          <Section delay={0.3}>
            <Box
              style={{
                border: '3px solid #5F967C',
                padding: '10px',
                borderRadius: '12px'
              }}
            >
              <Link
                href={'https://www.youtube.com/@brandonnguyenlam/featured'}
                style={{ textDecoration: 'none' }}
              >
                <Button variant={'ghost'} onHover={{ textDecoration: 'none' }}>
                  <ListItem>
                    <ListIcon as={IoLogoYoutube} color="red" />
                    YouTube
                  </ListItem>
                </Button>
              </Link>
            </Box>
          </Section>
          {/*<Section delay={0.4}>*/}
          {/*<Box style={{border: "3px solid #5F967C", padding: "10px", borderRadius: "12px"}}>*/}
          {/*    <Link href={"https://www.linkedin.com/in/brandon-nguyen-lam/"} style={{ textDecoration: "none"}}>*/}
          {/*        <Button variant={'ghost'} onHover={{textDecoration: "none"}} color={"black"}>*/}
          {/*            <ListItem>*/}
          {/*                <ListIcon as={IoLogoLinkedin} color='blue.500' />*/}
          {/*                LinkedIn*/}
          {/*            </ListItem>*/}
          {/*        </Button>*/}
          {/*    </Link>*/}
          {/*</Box>*/}
          {/*</Section>*/}

          <Section delay={0.4}>
            <Box
              style={{
                border: '3px solid #5F967C',
                padding: '10px',
                borderRadius: '12px'
              }}
            >
              <Link
                href={'https://www.youtube.com/watch?v=0yBnIUX0QAE'}
                style={{ textDecoration: 'none' }}
              >
                <Button variant={'ghost'} onHover={{ textDecoration: 'none' }}>
                  <ListItem>
                    <ListIcon as={IoMusicalNotes} color="black" />
                    Fav Song
                  </ListItem>
                </Button>
              </Link>
            </Box>
          </Section>
        </List>
      </VStack>
    </Center>
  )
}

export default Links
