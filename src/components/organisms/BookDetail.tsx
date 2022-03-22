import React from 'react';
import { BookItem } from '../../../pages/book/[id]';
import { Tag } from '../common/Tag';
import { Title } from '../common/Title';
import { BookInfo } from '../molecules/BookInfo';
import { TagBox } from '../molecules/TagBox';

type Props = {
  book: BookItem
}

export const BookDetail = ({ book }: Props) => {
  const { title, bookTag } = book;
  return (
    <div className='pt-20 pb-5'>
      <Title title={title} />
      <div className='mt-3'>
        <TagBox gap={'10px'}>
        {
          bookTag.map((tag) => {
            return (
              <Tag name={tag.tag.name} key={`${title}${tag.tag.name}`} />
            );
          })
        }
        </TagBox>
      </div>
      <BookInfo book={ book }/>
    </div>
  );
};
