import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, id, title, thumbnail }) => (
    <Box w="100%" textAlign="center">
        <NextLink href={`/blog/${id}`} passHref scroll={false}>
            <LinkBox cursor="pointer">
                <Image
                    src={thumbnail}
                    alt={title}
                    className="grid-item-thumbnail"
                    placeholder="blur"
                />
                <LinkOverlay href={`/blog/${id}`}>
                    <Text mt={2} fontSize={20} color={"black"}>
                        {title}
                    </Text>
                </LinkOverlay>
                <Text fontSize={14}>{children}</Text>
            </LinkBox>
        </NextLink>
    </Box>
)


export const WorkGridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          borderRadius="30px"
          style={{ boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
            borderRadius: '30px'
        }}
        />
        <LinkOverlay href={href} target={"_blank"}>
          <Text mt={2} fontSize={20} fontWeight="bold" color={"black"}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14} color={"black"}>{children}</Text>
      </LinkBox>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)