export const boards = [
  {
    id: parseInt(Date.now() + Math.random() * 10),
    title: 'To do',
    card: [
      {
        id: parseInt(Date.now + Math.random() * 4),
        title: 'Card 1',
      },
      {
        id: parseInt(Date.now + Math.random() * 4),
        title: 'Card 2',
      },
      {
        id: parseInt(Date.now + Math.random() * 4),
        title: 'Card 3',
      },
    ],
  },
]
