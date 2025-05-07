export type Quote = {
  author: string,
  body: string,
  lines?: {
    body: string,
    author: string
  }[]
}
