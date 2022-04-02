import React from 'react';
import { BookTag } from '../../enum/bookTag';
import Link from 'next/link';

export const Category = () => {
  return (
    <div className='mt-5 mb-8 w-full rounded-lg'>
      <h3 className='mb-6 font-bold text-2xl text-left'>Category</h3>
      <div className='flex flex-wrap justify-between gap-x-1 gap-y-2'>
        {BookTag.map((item) => {
          return <CategoryItem key={item.name} name={item.name} />;
        })}
      </div>
    </div>
  );
};

type Props = {
  name: string;
};

const CategoryItem = (props: Props) => {
  const { name } = props;
  return (
    <div className='max-w-200 w-full  p-1 rounded-lg border-solid border-2 border-l-stone-200 text-right'>
      <Link href={`/`} passHref>
        <div className=''>{name}</div>
      </Link>
    </div>
  );
};
