import React from 'react'
import { styled } from 'linaria/react'

export const Btn = () => {
  const test = () => {
    console.log('test')
  }
  return (
    <Button color={'red'}>
      buttonです
    </Button>
  )
}

const Button = styled.button<{ color: string }>`
  font-size: 20px;
  color: ${({ color }: { color: string }) => color};
`
