import React from 'react';
import { ElementFrec } from '../../../../types/jsx';

export const Input: ElementFrec<"input"> = React.forwardRef((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
    />
  );
});
