import React from 'react';

type Props = {
  text: string,
  forText: string
}

export const InputLabel = (props: Props) => {
  const {text, forText} = props;
  return (
    <label htmlFor={forText}>{text}</label>
  );
};
