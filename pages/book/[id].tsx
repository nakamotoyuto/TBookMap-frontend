import { Box } from "@chakra-ui/layout"
import { API_URL } from "../../src/util/constants"

type bookReturnType = {
  status: number
  data: Item[]
}

type Item = {
  id: number,
  title: string,
  detail_url: string,
  detail: string,
  publisher_name: string,
  sales_date: string,
  image_url: string,
  author: string,
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

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}books/`)
  const books: bookReturnType = await res.json()
  const paths = books.data.map((item: Item) => {
    return {
      params: { id: item.id.toString() },
    }
  })

  return { paths, fallback: false }
}

// This function gets called at build time
export async function getStaticProps({ params }:any) {
  const res = await fetch(`${API_URL}books/${params.id}`)
  const book: Item = await res.json()
  return { props: { book } }
}

export default function Book({ book }: any) {
  return (
    <Box>{book.title}</Box>
  )
}