import { Box, Image, Badge,HStack, Tag } from '@chakra-ui/react'
import React from 'react'
import { API_URL, IMAGE_URL } from '../../util/constants'
import images from '../../../public/img/booksImage0.jpg'
import { css } from '@emotion/react'
// import { BookTag } from '../../enum/bookTag'

type Props = {
  image_url: string,
  title: string,
  bookTag: [
    {
      id: number,
      tag: Tag
    }
  ]
}

type Tag = {
  id: number,
  name: string,
  createdAt: string,
  updatedAt: string
}

export const BookCard = (props: Props) => {
  const { image_url, bookTag, title } = props

  return (
    <Box maxW="145px" p={2} borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={`${IMAGE_URL}${image_url}.jpg`} alt={`${IMAGE_URL}${image_url}`} />
      <Box pt="2" d="flex" flexDirection="column" justifyContent="space-between">
        <Box d="flex" alignItems="baseline" flexWrap="wrap" css={css`gap: 5px 5px;`}>
          {bookTag.map((tag) => {
            return (
              <Tag key={`${title}${tag.tag.name}`} size={"sm"} variant="solid" colorScheme="teal">
                {tag.tag.name}
              </Tag>
            )
          })}
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          css={titleText}
        >
          {title}
        </Box>
      </Box>
    </Box>
  )
}

const titleText = css`
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 14px;
`
