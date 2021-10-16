import React from 'react'
import { useForm } from 'react-hook-form'
import { FormParamsData, FormParamsDataKey } from '../../types/formParams'

type Props = {
  onSubmit: any,
  formParamskey: FormParamsDataKey,
}

export const FormWrap:React.FC<Props> = (props) => {
  const { formParamskey, onSubmit, children } = props

  const { handleSubmit } = useForm<FormParamsData[typeof formParamskey]>()
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {children}
    </form>
  )
}
