import { Box } from '@chakra-ui/layout'
import { css } from '@chakra-ui/styled-system'
import { SerializedStyles } from '@emotion/utils'
import React from 'react'

type Props = {
  gap: string
}

export const TagBox: React.FC<Props> = (props) => {
  const { gap } = props
  return (
    <Box d="flex" alignItems="baseline" flexWrap="wrap" css={css({ gap : gap })} >
      {props.children}
    </Box>
  )
}
