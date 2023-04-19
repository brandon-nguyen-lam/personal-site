import { Box, Container, Link, VStack, HStack } from "@chakra-ui/react";
import {IoLogoGithub, IoLogoLinkedin, IoMail} from "react-icons/io5";

const Footer = () => {
  return (
    <VStack>
    <Container bg ="white">
      <HStack justifyContent={'center'}>
        <Link href="https://github.com/brandon-nguyen-lam" target="_blank" _hover={{textDecoration: "none"}}>
          <IoLogoGithub fontSize="32px" color="#5F967C"/>
        </Link>
        <Link href="https://www.linkedin.com/in/brandon-nguyen-lam/" target="_blank" _hover={{textDecoration: "none"}}>
          <IoLogoLinkedin fontSize="32px" color="#5F967C"/>
        </Link>
        <Link href="mailto:brandonnguyenlam@gmail.com" target="_blank" _hover={{textDecoration: "none"}}>
          <IoMail fontSize="32px" color="#5F967C"/>
        </Link>
      </HStack>
        <Link href={"https://github.com/brandon-nguyen-lam/personal-site"} isExternal>
      <Box pt={2} align= "center" opacity={0.3} fontSize={"sm"} color={"black"}> site last updated 4/19/2023</Box>
        </Link>
    </Container>
      <Box
        position="fixed"
        bg="#5F967C"
        bottom="0"
        left="0"
        width="100%"
        textColor="#5F967C"
        height="15px"
        fontSize="1px"

      >easter egg!!</Box>

    </VStack>


)
}

export default Footer
