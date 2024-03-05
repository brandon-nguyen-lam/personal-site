import { Box, Center, Container, Heading, Link, VStack } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import Image from 'next/image'
import React from 'react'

const Recap = () => (
  <Layout title="recap">
    <Container>
      <Heading
        as="h3"
        fontSize={35}
        mb={4}
        align="center"
        textDecoration={'underline'}
        textUnderlineOffset={'10px'}
        textDecorationColor={'#5F967C'}
        color={'black'}
      >
        College Internship Search Recap
      </Heading>
      <Section delay={0.1}>
        <Center>
          <Heading opacity={0.8} fontSize={'20px'}>
            Brandon Lam • 13 minute read • 10/13/2023
          </Heading>
        </Center>
        <Heading as="h3" variant="section-title" color={'black'}>
          2022-2023 - Freshman Year
        </Heading>
      </Section>

      <Section delay={0.3}>
        <VStack>
          <Box>
            As a preface, I want to say that I am not a genius, I am not a
            prodigy, and I am not trying to brag. I'm just a regular guy who
            works hard and I want to share my journey.
          </Box>
          <Box>
            2022 was my first year in college, even though I did technically
            have two years of PSEO at the University of Minnesota, it finally
            felt as if I was a real college student since I had just graduated
            high school. I decided to major in Computer Science, as I had really
            enjoyed taking CSCI 1133 and CSCI 1933 and frankly, I’m not smart
            enough for any other engineering major 💀. I had heard from a friend
            that CS students should do internships because it was a good way to
            get experience, so I figured I should try to get one.
          </Box>
          <Box>
            That being said, my first ever
            <Link
              paddingLeft="1"
              color={'blue'}
              href={'https://i.imgur.com/4YMYD7t.png'}
            >
              resume
            </Link>{' '}
            was an absolute tragedy, and I needed a lot of help. Despite my
            resume looking like that, I somehow got some interviews at some
            local companies.
          </Box>
          <Box>
            During my interviews, it is an understatement to say that I was
            completely embarrassed in them. I had only had two CS classes at the
            time and my first ever interview was system design interview where
            when asked what type of database I would use, I said, “We would use
            a database in our department because it’s safe.”
          </Box>
          <Box>
            It was a rough time, I was getting online assessments from companies
            and simply closing out of them because I had no clue how to start
            coding up the solutions. Is CS the correct major for me? Should I
            swap majors? Will I be able to get an internship? Imposter syndrome
            was hitting hard, but I decided to stick with it.
          </Box>
          <Box>
            I heard about the CSE Mentor program during orientation and figured
            I should try it out since I’d been struggling so much. I ended up
            getting matched with a SWE at Google named Noah Park. During one of
            our first meetings, I asked Noah what to do to get an internship and
            he told me, “Stop going to class and start LeetCoding and making
            projects” so what did I do? Exactly that. Jokes aside, Noah provided
            me lots of career advice and mock interviews which helped me a lot
            through the recruitment process.
          </Box>
          <Image src={'/images/lcdiagram.png'} width={500} height={500} />
          <Center>
            (My LeetCode stats after Noah told me to stop going to class)
          </Center>
          <Box>
            At the time as well, my friend Samyok wanted us to attend a
            hackathon in Iowa called HackUIowa. I had no clue what a hackathon
            was and thought it was some type of competition where you hack into
            people’s computers. After getting some frontend workshops from
            Samyok, we embarked on the 5 hour drive to Iowa.
          </Box>
          <Box>
            To be honest, he carried pretty hard at the hackathon as the rest of
            us were struggling to center a div, but we ended up creating Annote,
            a note-taking app that transcribes your lectures as well and won
            first place.
          </Box>
          <Box>
            It was really cool to me getting to spend the 24 hours with my
            friends and see a product come to life in the span of 24 hours. From
            there, we’ve traveled to places like California and New York to
            compete in hackathons. (shoutout to MiniHacks)
          </Box>
          <Box>
            At this point, I was starting to get pretty decent at interviewing
            and making some good projects. I ended up receiving my first offer
            in December at UnitedHealth Group and did a co-op with them.
          </Box>
          <Box>
            Working as a software engineer intern and getting experience was
            nice, it had felt much different than class and I was actually
            enjoying the work I did and getting challenged. A couple of months
            of work go by and all of a sudden, I received an email from someone
            at NASA.
          </Box>
          <Box>
            NASA?!?!?! That was my dream to work for them as a kid! The email
            was from a project manager at NASA named Nancy Hall, she was
            interested in my background and wanted to know more about me. The
            interview for the role was one of the most unusual processes I’ve
            ever had.
          </Box>
          <Box>
            She asked me if I was available to help judge for NASA Hunch, NASA’s
            high school STEM competition and asked if I was available the next
            day. So the next day, I ended up being “sick” and skipped school and
            work. I get to the competition and I figure there’s going to be me,
            a couple of other college students, and some NASA mentors to judge
            the competition, but after I get there and greet myself I find out
            the only judges are me and three NASA employees.
          </Box>
          <Box>
            Judging the competition was incredible, I got to meet some
            incredibly smart middle school and high school students that were
            creating very innovative solutions for NASA. After the judging, I
            just spent a good hour talking to the NASA employees about life and
            I ended up getting an offer and having one of the most incredible
            summers of my life.
          </Box>
          <Box>
            It’s wild to think though, how in that one year, I started off not
            knowing what LeetCode was, or having any personal projects. It
            really has been a wild ride and I’m proud of myself.
          </Box>
          <Image src={'/images/sankeydiagram.png'} width={500} height={500} />
          <Center>
            (2022-2023 stats, I actually got 5 offers and applied to 300)
          </Center>
        </VStack>
      </Section>
      <Heading as="h3" variant="section-title" color={'black'}>
        2023-2024 - Sophomore year
      </Heading>
      <VStack>
        <Box>
          After wrapping up my internship at NASA, I was feeling pretty
          confident about the next year of recruiting. I had landed myself a
          return offer 3 weeks into the internship (like how whattt) which took
          a lot of pressure off of me. I had spent the past months grinding
          leetcode and projects and it was time to see if it would pay off. This
          was the{' '}
          <Link
            paddingLeft="1"
            color={'blue'}
            href={
              'https://drive.google.com/file/d/1VXGVmRp6NFjdgwAGf6ixkTDMBaOE_A3z/view'
            }
          >
            resume
          </Link>{' '}
          I was applying with.
        </Box>
        <Box>
          The companies I received interviews from: Meta, Tesla, Riot Games,
          Citadel, SIG, Palantir, Atlassian, Capital One, BNY Mellon, and Amazon
        </Box>
        <Box>
          From that list, the companies I fumbled were Riot Games, Citadel, SIG,
          Palantir, BNY Mellon, and Amazon.
        </Box>
        <Box>
          SIG was my first ever technical interview and the fact that it was a
          quant firm was terrifying. I ended up getting an object-oriented
          design question and I thought my approach was good, but two of the
          test cases failed despite the interviewers saying it should work.
        </Box>
        <Box>
          Citadel was a bit crazy because I didn't think I would ever pass their
          resume screen. I remember finishing their OA in like 20 minutes but
          getting rejected like a week later but a recruiter hit me up one day
          and I got unrejected. During my interview it was a bit of resume
          discussion and a LC Medium-Hard question that I had to solve with
          follow ups in 20 minutes. I ended up solving the question optimally
          and in time but was rejected.
        </Box>
        <Box>
          Palantir I just didn't get team matched so I was rejected after the
          phone screen because I'm a python one trick and I fumbled the Amazon
          OA because I'm a bot.
        </Box>
        <Box>
          {' '}
          BNY Mellon was pretty funny though, I applied to it for fun just for
          interview practice but after I opened their OA, I got bored and closed
          out of it without solving a single question because it had 5 questions
          and I wanted to go to sleep. I ended up somehow making it to the final
          and then on the day of my final, I wait in the call for like 15
          minutes and then I'm like, "What the heck where are my
          interviewers???" I then check the email and I found out that my
          interview was scheduled for yesterday 💀.
        </Box>
        <Box>
          Riot Games however, was one of the biggest fumbles ever. For a little
          context, Riot Games was my dream company and their game, Teamfight
          Tactics, has played a huge role in my life. I have spent countless
          hours playing the game even reaching top 100 in their game, and it was
          also the reason I got into coding. I was able to make it all the way
          to the final interview but I was rejected after the final interview
          with the hiring manager. I was pretty devastated after that but at the
          end of the day the role was solely in C++ and I have not written a
          line of C++ in my life. That being said, I went through their
          interview process for 4 months so that was miserable. I'm hoping I can
          get it next year.
        </Box>
        <Box>
          As for the other companies, I was able to get offers from Meta, Tesla,
          Atlassian, and Capital One. I ended up accepting Tesla for Winter 2024
          and Meta for Summer 2024. I'm super thankful for the opportunities and
          I'm really glad all of my hard work paid off.
        </Box>
        <Box>
          Capital One's process was a bit weird. They didn't send me an OA
          because I did one last year so I tried to reapply on an alt email to
          get the OA and then my account got flagged for applying twice. The
          funny thing is I never did the OA and I randomly got an invitation to
          schedule my final interview in late September. It was a 3-hour long
          interview with 3 different interviews consisting of behavioral,
          technical, and case. None of the interviews were too difficult and I
          ended up getting an offer.
        </Box>
        <Box>
          Atlassian was very standard. I got the OA then had to wait like 2
          months before I got the phone screen which was leetcode. I ended up
          getting the most tagged question on leetcode and I was able to solve
          it pretty fast then I got scheduled for the final which was solely
          behavioral. During the behavioral, I ended up vibing hard with my
          interviewer and talking about TFT with him so I got the offer.
        </Box>
        <Box>
          Tesla was a bit of a mess. I had actually been rejected for a previous
          Tesla internship after doing the phone screen and my hopes were pretty
          low. After doing the OA, I got scheduled for the phone screen where I
          got two leetcode questions, two mediums where I had to solve in 30
          mins and then I got database trivia. After I passed that, I got
          scheduled for the final interview which was with the hiring manager.
          There, he realized I was capping on my resume so that was super
          awkward and he called me out on that. I also had to do a leetcode
          question and he told me my time complexity was wrong a couple of times
          and I kept telling him my answer was correct and he wouldn't believe
          me even after my explanation. So after the interview, I go by for 3
          weeks and just assume I'm rejected and all of a sudden I get an offer.
          I actually ended up declining the offer but then I laid in bed staring
          at the ceiling for 5 or so hours and realized I fumbled the bag and
          begged my recruiter for the offer back. Spoiler alert: I got the offer
          back.
        </Box>
        <Box>
          Finally, Meta was super unexpected. I was already settled down with my
          Atlassian offer for summer and very content with it and all of a
          sudden I got a message from a Meta recruiter asking if I was
          interested in interviewing for a role. It only consisted of two rounds
          OA and final. I was able to pass the OA and make it to the final round
          which was two leetcode hards you had to solve in 40 min. I was able to
          solve both of them and I got the offer. It feels kind of fraudulent
          because I honestly think Meta's process was so fast and so easy but
          it's by far the best offer I got.
        </Box>
        <Box>
          Overall, I'm super happy with the offers I got and I'm super proud of
          myself for getting this far in the span of two years. I went into
          college having already tried swapping my major 4 times and CS was my
          fifth attempt at something and look at where we are today :)
        </Box>
        <Image src={'/images/sankeydiagram2.png'} width={500} height={500} />
        <Center>(2023-2024 stats)</Center>
      </VStack>
    </Container>
  </Layout>
)

export default Recap
