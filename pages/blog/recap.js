import {Box, Center, Container, Heading, Link, VStack} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import Image from 'next/image'

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
                2022-2023 Internship Search Recap
            </Heading>
            <Section delay={0.1}>
                <Center>
                    <Heading opacity={0.8} fontSize={'20px'}>
                        Brandon Lam • 7 minute read • 10/13/2023
                    </Heading>
                </Center>
            </Section>
            <Section delay={0.3}>
                <VStack>
                    <Box>
                        2022 was my first year in college, even though I did technically have two years
                        of PSEO at the University of Minnesota, it finally felt as if I was a real college
                        student since I had just graduated high school.
                        I decided to major in Computer Science, as I had really enjoyed taking CSCI 1133
                        and CSCI 1933 and  frankly, I’m not smart enough for any other engineering major 💀.
                        I had heard from a friend that CS students should do internships because it was a good way
                        to get experience, so I figured I should try to get one.
                    </Box>
                    <Box>
                        That being said, my first ever
                        <Link paddingLeft="1" color={"blue"} href={"https://i.imgur.com/4YMYD7t.png"}>resume</Link> was an absolute tragedy, and I needed a lot of help.
                        Despite my resume looking like that, I somehow got some interviews at some local companies.
                    </Box>
                    <Box>
                        During my interviews, it is an understatement to say that I was completely
                        embarrassed in them. I had only had two CS classes at the time and my first
                        ever interview was system design interview where when asked what type of database
                        I would use, I said, “We would use a database in our department because it’s safe.”
                    </Box>
                    <Box>
                        It was a rough time, I was getting online assessments from companies and simply closing
                        out of them because I had no clue how to start coding up the solutions. Is CS the correct
                        major for me? Should I swap majors? Will I be able to get an internship?
                        Imposter syndrome was hitting hard, but I decided to stick with it.
                    </Box>
                    <Box>
                        I heard about the CSE Mentor program during orientation and figured I
                        should try it out since I’d been struggling so much. I ended up getting
                        matched with a SWE at Google named Noah Park. During one of our first meetings,
                        I asked Noah what to do to get an internship and he told me, “Stop going to
                        class and start LeetCoding and making projects” so what did I do? Exactly that.
                        Jokes aside, Noah provided me lots of career advice and mock interviews which
                        helped me a lot through the recruitment process.
                    </Box>
                    <Image src={"/images/lcdiagram.png"} width={500} height={500}/>
                    <Center>(My LeetCode stats after Noah told me to stop going to class)</Center>
                    <Box>
                        At the time as well, my friend Samyok wanted us to attend
                        a hackathon in Iowa called HackUIowa. I had no clue what
                        a hackathon was and thought it was some type of competition
                        where you hack into people’s computers. After getting some
                        frontend workshops from Samyok, we embarked on the 5 hour
                        drive to Iowa.
                    </Box>
                    <Box>
                        To be honest, he carried pretty hard at the hackathon as the rest of
                        us were struggling to center a div, but we ended up creating Annote,
                        a note-taking app that transcribes your lectures as well and won first place.
                    </Box>
                    <Box>
                        It was really cool to me getting to spend the 24 hours with my friends
                        and see a product come to life in the span of 24 hours. From there,
                        we’ve traveled to places like California and New York to compete in hackathons. (shoutout to MiniHacks)
                    </Box>
                    <Box>
                        At this point, I was starting to get pretty decent
                        at interviewing and making some good projects. I ended up
                        receiving my first offer in December at UnitedHealth Group
                        and did a co-op with them.
                    </Box>
                    <Box>Working as a software engineer intern and getting experience
                        was nice, it had felt much different than class and I was actually
                        enjoying the work I did and getting challenged. A couple of months
                        of work go by and all of a sudden, I received an email from someone at NASA.</Box>
                    <Box>
                        NASA?!?!?! That was my dream to work for them as a kid!
                        The email was from a project manager at NASA named Nancy Hall,
                        she was interested in my background and wanted to know more about me.
                        The interview for the role was one of the most unusual processes I’ve ever had.
                    </Box>
                    <Box>
                        She asked me if I was available to help judge for NASA Hunch,
                        NASA’s high school STEM competition and asked if I was available
                        the next day. So the next day, I ended up being “sick” and skipped school and work.
                        I get to the competition and I figure there’s going to be me, a couple
                        of other college students, and some NASA mentors to judge the competition,
                        but after I get there and greet myself I find out the only judges are me and three NASA employees.
                    </Box>
                    <Box>
                        Judging the competition	was incredible, I got to meet some
                        incredibly smart middle school and high school students that
                        were creating very innovative solutions for NASA. After the judging,
                        I just spent a good hour talking to the NASA employees about life and
                        I ended up getting an offer and having one of the most incredible summers of my life.
                    </Box>
                    <Box>
                        It’s wild to think though, how in that one year,
                        I started off not knowing what LeetCode was,
                        or having any personal projects.
                        It really has been a wild ride and I’m proud of myself.
                    </Box>
                    <Image src={"/images/sankeydiagram.png"} width={500} height={500}/>
                    <Center>(2022 stats, I actually got 5 offers and applied to 300)</Center>
                </VStack>
            </Section>
        </Container>
    </Layout>
)

export default Recap
