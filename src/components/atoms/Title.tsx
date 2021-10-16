import { Heading } from '@chakra-ui/layout'
import React from 'react'

type Props = {
  title: string
}

export const Title = ({title}: Props ) => {
  return (
    <Heading as="h2" size="lg">
      {title}
    </Heading>
  )
}
