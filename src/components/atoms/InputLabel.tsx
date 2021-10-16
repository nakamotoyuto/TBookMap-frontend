import { FormLabel } from '@chakra-ui/form-control'
import React from 'react'

type Props = {
  text: string,
  forText: string
}

export const InputLabel = (props: Props) => {
  const {text, forText} = props
  return (
    <FormLabel htmlFor={forText}>{text}</FormLabel>
  )
}
