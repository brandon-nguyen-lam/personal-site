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
          date="June 2023 - August 2023"
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
                background="white"
                borderRadius="50%"
                src={'images/nasa.png'}
              />
            </Box>
          }
        >
          <Heading as="h3" size="md" mb={2}>
            NASA
          </Heading>
          <Heading as={'h4'} size={'sm'} mb={2}>
            Software Engineer Intern
          </Heading>
          <Text>
            I helped develop NASA's Inventory Management Program.
            This site helped manage the inventory of the International Space Station.
            The site was built using JavaScript, Vue, Spring Boot, and Node.js.
          </Text>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#5F967C', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #5F967C' }}
          date="January 2023 - June 2023"
          iconStyle={{
            background: '#5F967C',
            color: '#fff',
            width: '48px',
            height: '48px'
          }}
          icon={
            <Box>
              <Image borderRadius="50%" src={'images/uhglogo.png'} />
            </Box>
          }
        >
          <Heading as="h3" size="md" mb={2}>
            UnitedHealth Group
          </Heading>
          <Heading as={'h4'} size={'sm'} mb={2}>
            Software Engineer Intern
          </Heading>
          <Text>
            I helped in developing and fine-tuning a chatbot utilizing AI to
            help customers with information related to their bank account that
            was used by over 1,000 users daily and deployed on Microsoft Azure.
            Additionally, I redesigned the interface for the company's website
            and mobile app improving the accessibility and user experience
            scores by 30% using React.
          </Text>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#5F967C', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #5F967C' }}
          date="September 2022 - December 2022"
          iconStyle={{
            background: '#5F967C',
            color: '#fff',
            width: '48px',
            height: '48px'
          }}
          icon={<Image borderRadius="50%" src={'images/mobalyticslogo.jpg'} />}
        >
          <Heading as="h3" size="md" mb={2}>
            Mobalytics
          </Heading>
          <Heading as={'h4'} size={'sm'} mb={2}>
            Data Analytics Intern
          </Heading>
          <Text>
            I conducted market analysis on 12 different crypto games analyzing
            their size, potential, environment, and competition. I also stored
            and visualized data on over 1,000 companies in the eSports industry,
            using SQL and Tableu. From that, I was able to conclude that over
            95% of eSports companies were not profitable and presented my
            findings on the future of eSports companies to the company CEO and
            CTO.
          </Text>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Box>
  )
}

export default ExperienceBar
