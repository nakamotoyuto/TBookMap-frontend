import React from 'react'
import { styled } from 'linaria/react'

type Props = {
  title: string
  backgroundColor?: string,
  clickEvent?: VoidFunction
}

export const Btn = (props: Props) => {
  const bgColor = props.backgroundColor ? props.backgroundColor : '#EB7F31'
  return (
    <Button onClick={props.clickEvent} color={'#ffffff'} backgroundColor={bgColor}>
      {props.title}
    </Button>
  )
}

const Button = styled.button<{ color: string, backgroundColor: string }>`
  background-color: ${props => props.backgroundColor};
  color: ${({ color }: { color: string }) => color};
  font-size: 20px;
  border: none;
`;
