import React from 'react'
import Link from 'next/link'
import { Box, Image, Badge, HStack, Tag } from '@chakra-ui/react'
import { API_URL, IMAGE_URL } from '../../util/constants'
import { css } from '@emotion/react'
import { CategoryTag } from '../atoms/CategoryTag'
import { TagBox } from './TagBox'
// import { BookTag } from '../../enum/bookTag'

type Props = {
  image_url: string,
  title: string,
  id: number
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
  const { image_url, bookTag, title, id } = props
  // TODO: cardcomponentで切り分ける
  return (
    <>
      <Link href={`/book/${id}`}>
        <Box maxW="145px" p={2} borderWidth="1px" borderRadius="lg" overflow="hidden" css={cardLink}>
          <Image src={`${IMAGE_URL}${image_url}`} alt={`${IMAGE_URL}${image_url}`} fallbackSrc="https://via.placeholder.com/150"/>
          <Box pt="2" d="flex" flexDirection="column" justifyContent="space-between">
            <TagBox gap={'5px 5px'}>
              {bookTag.map((tag) => {
                return (
                  <CategoryTag name={tag.tag.name} size="sm" key={`${title}${tag.tag.name}`} />
                )
              })}
            </TagBox>
            <Box
              mt="1"
              fontWeight="semibold"
              css={titleText}
            >
              {title}
            </Box>
          </Box>
        </Box>
      </Link>
    </>
  )
}

const cardLink = css`
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`

const titleText = css`
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 14px;
`
