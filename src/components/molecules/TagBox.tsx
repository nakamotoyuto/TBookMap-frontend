import React, { ReactNode } from 'react';

type Props = {
  gap: string;
  children: ReactNode
};

export const TagBox = (props: Props) => {
  const { gap } = props;
  return <div className={`flex align-baseline flex-wrap gap-${gap}`}>{props.children}</div>;
};
