import {
    Box,
    Container,
    Center,
    Heading, VStack
} from "@chakra-ui/react"
import Layout from '../../components/layouts/article'
import Section from "../../components/section";
import Polaroid from "../../public/images/polaroid.png";
import Image from "next/image";

const Memories = () => (
    <Layout title="memories">
        <Container>
            <Heading
                as="h3"
                fontSize={35}
                mb={4}
                align="center"
                textDecoration={"underline"}
                textUnderlineOffset={"10px"}
                textDecorationColor={"#5F967C"}
                color={"black"}
            >
                Memories
            </Heading>
            <Section delay={0.1}>
                <Center>
                <Heading opacity={0.8} fontSize={"20px"}>
                    Brandon Lam • 5 minute read • 12/5/2022
                </Heading>
                </Center>
            </Section>
            <Section delay={0.3}>
                <VStack>
            <Box>
                As my first semester of college comes to an end, I've been constantly
                pondering the question of whether or not I should live on campus.
                At first, it seemed like a no-brainer to live off campus and save
                the extra $10,000. However, after weighing my options I believe
                that the benefits of living on campus outweigh the costs.
            </Box>
            <Box>
                One of the biggest issues is the fact that it becomes nearly impossible
                to participate in clubs and hang out with friends unless I want to stay
                on campus for 12 hours. A typical day for me this semester consists of
                waking up at 8:00 AM to get ready for class at 9:00 AM. After class ends
                at 2:15 PM, if I want to hang out with friends or participate in any clubs,
                it usually happens after 6:30 PM, and often much later than that.
            </Box>
            <Box>
                What am I
                supposed to do in the meantime? After a day of classes, I don't want to spend
                four hours doing homework. I want to sleep, play a game, or watch a show. While I could
                technically do those things on campus, it's not the same as being in my own dorm or house.
            </Box>
            <Box>
                The social aspect of college is incredibly important to me. When someone asked me what my
                biggest goal in college was, it wasn't something like "I want an internship" or "I want good
                grades." For me, it was simply having a strong social life. I want to be in clubs and hang out with friends.
            </Box>
            <Box>
                This is my fifth semester of college, but I consider it my first "real" semester because the first two years
                were affected by COVID. One year was fully online, and the other year was hybrid. During those two years,
                I only made one friend, and all of my other PSEO friends were in the same situation.
            </Box>
            <Box>
                Another reason the social aspect of college matters so much to me is that I used to spend at least
                30 hours a week at robotics in high school. Spending time with friends and working as a team to build
                a robot were some of my favorite memories from freshman and sophomore year.
            </Box>
            <Box>
                After being accepted to PSEO, I had to make a difficult decision: focus on my future and take a lot of credits,
                or take a reduced amount of credits and try to manage robotics on the side. I initially tried the latter
                , but it was still too much. I would spend about five hours at school and two hours at robotics. This meant
                I would have to drive an hour every day and then find time to do homework. I eventually had to quit robotics
                and focus on school.
            </Box>
            <Box>
                I am grateful for the opportunity to do PSEO, and entering college with 59 credits.
                However, due to the circumstances, I essentially had to give up my social life.
                This semester, however, I made lots of friends and it really has been some of the most fun
                I've ever had. I'm no longer watching lectures alone, I'm studying with friends, and I can finally
                socialize with others again. So yes, I would pay the extra $10,000 to live on campus. The memories
                I've made this semester are worth more than any amount of money.
            </Box>
            <Box boxSize={"sm"} paddingTop="30px">
                <Image src={Polaroid} alt={"Brandon Lam fanclub meeting"} />
                        </Box>
                </VStack>
            </Section>
        </Container>
    </Layout>
)

export default Memories
