import Link from 'next/link';
import React from 'react';

import { BookItem } from '../../../pages/book/[id]';
import { IMAGE_URL } from '../../util/constants';
import Image, { ImageLoaderProps } from 'next/image';

type Props = {
  book: BookItem;
};

const myLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${IMAGE_URL}/${src}?w=${width}&q=${quality || 75}`;
};

export const BookInfo = ({ book }: Props) => {
  console.log(book);
  const { title, image_url, detail, publisher_name, author, detail_url } = book;
  return (
    <div className='flex justify-start mt-10 mb-10 gap-28'>
      <Image
        loader={myLoader}
        src={`${image_url}`}
        width={225}
        height={300}
        layout='intrinsic'
        alt={title}
      />
      <div className='text-lg'>
        {detail && (
          <p className='inline-block pb-4 border border-solid border-zinc-700'>{detail}</p>
        )}
        <div className='flex flex-col gap-5 pt-4'>
          <p>出版社 : {publisher_name}</p>
          <p>著者・編集 : {author}</p>
          <p>
            詳細リンク : <Link href={detail_url}>{detail_url}</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
