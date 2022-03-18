import { Box } from '@chakra-ui/layout';
import { css } from '@chakra-ui/styled-system';
import { SerializedStyles } from '@emotion/utils';
import React from 'react';

type Props = {
  gap: string
}

export const TagBox: React.FC<Props> = (props) => {
  const { gap } = props;
  return (
    <div className={`flex align-baseline flex-wrap gap-${gap}`}>
      {props.children}
    </div>
  );
};
