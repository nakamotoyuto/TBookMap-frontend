import React from 'react';
import Link from 'next/link';
import Image, { ImageLoaderProps } from 'next/image';
import { IMAGE_URL } from '../../util/constants';
import { Tag } from '../common/Tag';
import { TagBox } from './TagBox';

type Props = {
  image_url: string,
  title: string,
  id: number
  bookTag: [
    {
      id: number,
      tag: Tag
    }
  ]
}

type Tag = {
  id: number,
  name: string,
  createdAt: string,
  updatedAt: string
}

const myLoader = ({ src, width, quality }:ImageLoaderProps) => {
  return `${IMAGE_URL}/${src}?w=${width}&q=${quality || 75}`;
};

export const BookCard = (props: Props) => {
  const { image_url, bookTag, title, id } = props;
  // TODO: cardcomponentで切り分ける
  return (
    <>
      <Link href={`/book/${id}`} passHref>
        <div className='max-w-150 p-2 rounded-sm border-2 overflow-hidden cursor-pointer opacity-80'>
          <Image loader={myLoader} src={`${image_url}`} width={150} height={200} layout="intrinsic" alt={title}/>
          <div className='pt-1 flex flex-col justify-between'>
            <TagBox gap={'1|.5'}>
              {bookTag.map((tag) => {
                return (
                  <Tag name={tag.tag.name} key={`${title}${tag.tag.name}`} />
                );
              })}
            </TagBox>
            <p className='mt-1 font-bold line-clamp-2 text-sm'>
              {title}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};
