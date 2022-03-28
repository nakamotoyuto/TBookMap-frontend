
import React from 'react';

type Props = {
  name: string,
  className?: string,
}
// tagコンポーネントに切り分ける。
export const Tag = (props: Props) => {
  const { name, className } = props;
  return (
    <div
      className={`
        text-xs
        inline-flex
        items-center
        font-bold
        leading-sm
        uppercase
        px-3
        py-1
        bg-blue-200
        text-blue-700
        rounded-full
        ${className}
        `
      }
      >
      {name}
    </div>
);
};
