import { Box } from '@chakra-ui/layout'
import { ModalBody } from '@chakra-ui/modal'
import { css, jsx } from '@emotion/react'
import React from 'react'
import { FormParamsData, FormParamsDataKey } from '../../types/formParams'
import { FormWrap } from '../atoms/FormWrap'
import { ModalFooterContent } from './modalInner/ModalFooterContent'
import { ModalHeaderContent } from './modalInner/ModalHeaderContent'

type Props = {
  data: {
    modalHeader: string,
    onSubmit: (data: FormParamsData[FormParamsDataKey]) => Promise<void>
    submitText: string,
    modalClose: VoidFunction,
    isLoading: boolean,
    formParamsKey: FormParamsDataKey
  }
}

export const ModalForm:React.FC<Props> = (props) => {

  const { modalHeader, onSubmit, submitText, modalClose, isLoading, formParamsKey } = props.data

  return (
    <Box p={4}>
      <FormWrap onSubmit={onSubmit} formParamskey={formParamsKey}>
      <ModalHeaderContent modalHeader={modalHeader}/>
        <ModalBody>
          {props.children}
          {/* {error && <Text css={errorMessage}>メールアドレスもしくはパスワードが違います。</Text>} */}
        </ModalBody>
        <ModalFooterContent isLoading={isLoading} text={submitText} modalClose={ modalClose}/>
      </FormWrap>
    </Box>
  )
}

const errorMessage = css`
  display: block;
  margin-bottom: 15px;
  font-size: 14px;
  color: #E53E3E;
`
