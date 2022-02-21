import { Box, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { css } from '@emotion/react';

import { BookItem } from '../../../pages/book/[id]';
import { IMAGE_URL } from '../../util/constants';

type Props = {
  book: BookItem
}

export const BookInfo = ({book}: Props) => {
  const { title, image_url, detail, publisher_name, author, detail_url } = book;
  return (
    <Box d="flex" justifyContent="flex-start" css={css`gap: 0 100px`} mt="40px">
      <Image src={`${IMAGE_URL}${image_url}`} alt={title} maxWidth="225px" width="100%"/>
      <Box fontSize="18px">
        <Text d="inline-block" pb="15px" borderBottom="1px solid #000000">{detail}</Text>
        <Box d="flex" flexDirection="column"css={css`gap: 30px 0`} pt="15px">
          <Text>出版社 : { publisher_name }</Text>
          <Text>著者・編集 : { author }</Text>
          <Text>詳細リンク : <Link href={ detail_url }>{ detail_url }</Link></Text>
        </Box>
      </Box>
    </Box>
  );
};
