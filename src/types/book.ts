export type Book = {
  id: number;
  title: string;
  detail_url: string;
  detail: string;
  publisher_name: string;
  sales_date: string;
  image_url: string;
  author: string;
  bookTag: [
    {
      id: number;
      tag: BookTag;
    },
  ];
};

export type BookTag = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
};
