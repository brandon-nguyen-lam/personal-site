import Link from 'next/link'
import { Box, Text, Image, HStack } from '@chakra-ui/react'
const Logo = () => {
  return (
    <Link href={'/'} scroll={false}>
      <HStack>
        <Image src={'/images/peepoSit.png'} width={10} height={10} />
        <Text fontFamily={'M PLUS Rounded 1c'} fontSize={'xl'} color={'black'}>
          Brandon Lam
        </Text>
      </HStack>
    </Link>
  )
}

export default Logo
