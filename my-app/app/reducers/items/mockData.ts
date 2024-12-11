import { Item } from 'types/item'
import dayjs from 'dayjs'

export const mockedItems: Array<Item> = [
  {
    id: 'item1',
    name: 'Do groceries',
    date: dayjs().format('YYYY-MM-DD'),
    isCompleted: false,
  },
  {
    id: 'item2',
    name: 'Buy flowers',
    date: dayjs().format('YYYY-MM-DD'),
    isCompleted: true,
  },
  {
    id: 'item3',
    name: 'Go to the gym',
    date: dayjs().format('YYYY-MM-DD'),
    isCompleted: false,
  },
  {
    id: 'item4',
    name: 'Meet friends',
    date: dayjs().format('YYYY-MM-DD'),
    isCompleted: false,
  },
]
