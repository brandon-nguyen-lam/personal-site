import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import React from 'react'
import { Box, Heading, Text, Image } from '@chakra-ui/react'

const ExperienceBar = () => {
  return (
    <Box>
      <VerticalTimeline
        lineColor="#5F967C"
        layout={'1-column-left'}
        animate={true}
      >
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#5F967C', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #5F967C' }}
            date="may 2025 - august 2025"
            iconStyle={{
              background: '#fff',
              color: '#fff',
              width: '48px',
              height: '48px'
            }}
            icon={
              <Box>
                <Image
                    padding="1px"
                    paddingLeft="1px"
                    // background="white"
                    borderRadius="50%"
                    src={'images/instagramThumb.jpeg'}
                />
              </Box>
            }
        >
          <Heading as="h3" size="md" mb={2}>
            instagram
          </Heading>
          <Heading as={'h4'} size={'sm'} mb={2}>
            software engineer intern
          </Heading>
          <Text>
            🧬 transpiler
          </Text>
          <Text>helping create the tool to automatically convert python to hack. big backing like crazy.</Text>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#5F967C', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #5F967C' }}
          date="may 2024 - august 2024"
          iconStyle={{
            background: '#fff',
            color: '#fff',
            width: '48px',
            height: '48px'
          }}
          icon={
            <Box>
              <Image
                padding="1px"
                paddingLeft="1px"
                // background="white"
                borderRadius="50%"
                src={'images/meta.jpeg'}
              />
            </Box>
          }
        >
          <Heading as="h3" size="md" mb={2}>
            meta
          </Heading>
          <Heading as={'h4'} size={'sm'} mb={2}>
            software engineer intern
          </Heading>
          <Text>
            🛠️ developer infrastructure
          </Text>
          <Text>i used binary search on peoples commits to find performance regressions and automated the process
            of finding the most optimal test configurations to reduce noise and increase signal strength.
            i also lost a lot of money playing poker.</Text>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#5F967C', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #5F967C' }}
          date="january 2024 - april 2024"
          iconStyle={{
            background: '#fff',
            color: '#fff',
            width: '48px',
            height: '48px'
          }}
          icon={
            <Box>
              <Image
                padding="1px"
                paddingLeft="1px"
                // background="white"
                borderRadius="50%"
                src={'images/tesla.jpeg'}
              />
            </Box>
          }
        >
          <Heading as="h3" size="md" mb={2}>
            tesla
          </Heading>
          <Heading as={'h4'} size={'sm'} mb={2}>
            software engineer intern
          </Heading>
          <Text>🚗 applications engineering</Text>
          <Text>
            i worked on tesla's internal timesheet tool 💀. i developed new backend api's and middleware to unify
            the system. i was going to see elon musk in person but he lost a
            $55 billion paycheck so he cancelled the meeting.
          </Text>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#5F967C', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #5F967C' }}
          date="june 2023 - august 2023"
          iconStyle={{
            background: '#fff',
            color: '#fff',
            width: '48px',
            height: '48px'
          }}
          icon={
            <Box>
              <Image
                padding="1px"
                paddingLeft="1px"
                // background="white"
                borderRadius="50%"
                src={'images/nasa.jpeg'}
              />
            </Box>
          }
        >
          <Heading as="h3" size="md" mb={2}>
            nasa
          </Heading>
          <Heading as={'h4'} size={'sm'} mb={2}>
            software engineer intern
          </Heading>
          <Text>🚀 iss inventory management program</Text>
          <Text>
            i helped develop nasa's inventory management program. this site
            helped manage the inventory of the international space station. i
            also mentored two high school students (shoutout to trinity and
            alaina) to redesign the frontend of the site.
          </Text>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#5F967C', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #5F967C' }}
          date="january 2023 - june 2023"
          iconStyle={{
            background: '#5F967C',
            color: '#fff',
            width: '48px',
            height: '48px'
          }}
          icon={
            <Box>
              <Image borderRadius="50%" src={'images/uhg.jpeg'} />
            </Box>
          }
        >
          <Heading as="h3" size="md" mb={2}>
            unitedhealth group
          </Heading>
          <Heading as={'h4'} size={'sm'} mb={2}>
            Software Engineer Intern
          </Heading>
          <Text>🤖 member portal and chatbot</Text>
          <Text>
            i helped in developing and fine-tuning a chatbot utilizing ai to
            help customers with information related to their hsa account that
            was used by over 1,000 users daily. i also moved some boxes around
            on the frontend to make the site prettier.
          </Text>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Box>
  )
}

export default ExperienceBar
