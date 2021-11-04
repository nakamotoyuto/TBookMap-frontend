import { HStack } from '@chakra-ui/layout'
import { useRadioGroup } from '@chakra-ui/radio'
import React from 'react'

type Props = {
  name: string
}

export const RadioCardGroup:React.FC<Props> = (props) => {
  const { name, children } = props
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: name,
  })
  const group = getRootProps()
  const radioProps = getRadioProps()
  return (
    <HStack {...group}>
      {children(radioProps)}
    </HStack>
  )
}
