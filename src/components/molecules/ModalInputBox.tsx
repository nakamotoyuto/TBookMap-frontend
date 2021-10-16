import { FormControl } from '@chakra-ui/form-control'
import { Box } from '@chakra-ui/layout'
import React from 'react'

type Props = {
  errors: boolean
}

export const ModalInputBox:React.FC<Props> = (props) => {

  const { errors, children } = props;

  return (
    <FormControl isInvalid={errors ? true : false}>
      <Box w={"100%"} mb={`30px`} d="flex" flexDirection="column" gap="10px" textAlign="left" fontSize="18px" fontWeight="bold">
        {children}
      </Box>
    </FormControl>
  )
}
