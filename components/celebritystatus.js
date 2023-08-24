import Section from "./section";
import {Heading, SimpleGrid} from "@chakra-ui/react";
import {WorkGridItem} from "./grid-item";
import supermodelThumb from "../public/images/supermodelThumb.png";
import codedexThumb from "../public/images/codedexThumb.png";
import React from "react";

const CelebrityStatus = () => {
    return (
    <Section delay={0.2}>
        <Heading as="h3" variant="section-title" color={'black'}>
            Celebrity Status
        </Heading>
        <SimpleGrid columns={[1, 1, 1]} gap={6} paddingTop={'10px'}>
            <Section delay={0.05}>
                <WorkGridItem
                    href="https://www.nasa.gov/sites/default/files/atoms/files/ps-03787-07_af_july_2023_508v2.pdf"
                    title="NASA Supermodel"
                    thumbnail={supermodelThumb}
                >
                </WorkGridItem>
            </Section>
            <Section delay={0.05}>
                <WorkGridItem
                    href="https://www.codedex.io/blog/a-day-in-the-life-swe-intern-nasa-brandon-lam"
                    title="Codédex"
                    thumbnail={codedexThumb}
                >
                </WorkGridItem>
            </Section>
        </SimpleGrid>
    </Section>
    )
}
export default CelebrityStatus