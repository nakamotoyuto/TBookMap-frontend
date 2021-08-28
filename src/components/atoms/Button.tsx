import React from 'react'
import { css, jsx } from '@emotion/react'

type Props = {
  title: string
  backgroundColor?: string,
  maxWidth?: number;
  clickEvent?: VoidFunction
}

export const Button = (props: Props) => {
  const bgColor = props.backgroundColor ? props.backgroundColor : '#EB7F31'
  const style = css`
  max-width: ${`${props.maxWidth}px`};
  width: 100%;
  background-color: ${bgColor};
  color: #ffffff;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  &:hover{
    opacity: 0.8;
  }
  &:focus{
    border: 1px solid #ffffff;
  }
  `
  return (
    <button onClick={props.clickEvent} css={style}>
      {props.title}
    </button>
  )
}
