export type CardModel = {
  id: number
  title: string
}

export type BoardModel = {
  id: number
  title: string
  card: CardModel[]
}
