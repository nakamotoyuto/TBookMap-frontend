import { Tag } from '@chakra-ui/react'
import React from 'react'

type Props = {
  name: string,
  size: (string & {}) | "sm" | "md" | "lg" | undefined
}

export const CategoryTag = (props: Props) => {
  const { name, size } = props
  return (
    <Tag size={size} variant="solid" colorScheme="teal">
      {name}
    </Tag>
)
}
