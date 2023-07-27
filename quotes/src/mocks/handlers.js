import { rest } from 'msw'

export const handlers = [
  rest.get('https://type.fit/api/quotes', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { text: 'Quote 1', author: 'Author 1' },
        { text: 'Quote 2', author: 'Author 2' },
      ]),
    )
  }),
]
