import {
    Box,
    Container,
    Center,
    Heading, VStack, AspectRatio
} from "@chakra-ui/react"
import Layout from '../../components/layouts/article'
import Section from "../../components/section";

const TF2 = () => (
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
                Competitive TF2
            </Heading>
            <Section delay={0.1}>
                <Center>
                    <Heading opacity={0.8} fontSize={"20px"}>
                        Brandon Lam • 3 minute read • 12/14/2022
                    </Heading>
                </Center>
            </Section>
            <Section delay={0.3}>
                <VStack>
                <Box>
                    TF2 is a first-person shooter game released by Valve Corporation in 2007.
                    It is a multiplayer game with nine different classes, each with their own
                    abilities and weapons. The game is known for its colorful graphics and unique
                    art style, as well as its wide range of game modes and maps.
                </Box>
                <Box>
                    In 2014, my cousin introduced me to the game. I quickly became a fan of the
                    character variety and cartoony style. It was a fast-paced and exciting game.
                    After trying out each class, I settled on the Soldier class as my main because
                    of its mobility and damage output.
                </Box>
                <Box>
                    After playing for a year, I was introduced to the competitive TF2 scene. As
                    a 12-year-old introvert, it was incredibly intimidating to join a team and
                    talk to people I had never met before. There is a stigma around young players
                    in gaming, and they are often ridiculed and called "squeakers". Despite my fear,
                    I tried out for a team and met two other players, Cheese and DarknessHolder, who
                    were also around my age. We became great friends.
                </Box>
                <Box>
                    All three of us ended up joining the team, but we only won one game. The team disbanded,
                    and the three of us formed a new team called Battle-Scarred Idiots (BS-I). We played a
                    different competitive mode with six players. We played for a year and then the team fizzled
                    out since playing competitive TF2 requires you to play for 2-3 hours per day, 5 days a week,
                    for 8 weeks straight.
                </Box>
                <Box>
                    After a few years of not playing TF2, I received a text from Simon, one of my old teammates,
                    saying that he wanted to revive our old team. I was excited at the prospect of playing the game
                    again and rekindling my passion for it. With only the three of us, we had to find three new members
                    to join the team. We were able to recruit Lando and Crim, who had previously played on our team, and
                    Nebria, who was known for his skill but also for his toxicity. Despite his reputation, we decided to
                    give him a chance and it ended up paying off. This new iteration of our team was the strongest one
                    we had ever had, and we worked hard to improve and become the best in our division.
                </Box>
                <Box>
                    We entered the playoffs as the 4th seed and managed to upset the 1st place team to make
                    it to the finals. Playing in the finals was an intense and thrilling experience, and it
                    was amazing to see people reacting to our plays on the live stream. Although we ultimately
                    lost 0-2, the fact that we had made it to the grand finals after a 3 year break was a huge accomplishment.
                </Box>
                <Box>
                    Meeting and playing with my teammates on TF2 has been one of the best experiences of my life.
                    Despite being advised not to talk to strangers on the internet, the people I met through the
                    game have become some of my closest friends. I will always treasure the time we spent together,
                    even if it meant sacrificing sleep. Shoutout to Simon, Maddox, Landon, and Max - I love you guys.
                </Box>

                </VStack>
                <Box paddingTop="30px">
                    <AspectRatio ratio={16 / 9}>
                        <iframe
                            src="https://www.youtube.com/embed/PJAJZhQ_00I"
                            allowFullScreen
                        />
                    </AspectRatio>
                </Box>
            </Section>
        </Container>
    </Layout>
)

export default TF2
