import { Box } from '@chakra-ui/layout';
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
    <Box p="80px 50px">
      <Title title={title} />
      <Box mt="10px">
        <TagBox gap={'10px'}>
        {
          bookTag.map((tag) => {
            return (
              <Tag name={tag.tag.name} size="md" key={`${title}${tag.tag.name}`} />
            );
          })
        }
        </TagBox>
      </Box>
      <BookInfo book={ book }/>
    </Box>
  );
};
