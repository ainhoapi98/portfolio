import { WidgetType } from 'types/Widget'
import ToDoList from 'components/ToDoList'
import { Item } from 'types/item'

const items: Array<Item> = [
  { id: '1', name: 'Item 1', date: '2024-01-01', isCompleted: false },
  { id: '2', name: 'Item 2', date: '2024-01-02', isCompleted: false },
  { id: '3', name: 'Item 3', date: '2024-01-03', isCompleted: true },
  { id: '4', name: 'Item 4', date: '2024-01-04', isCompleted: true },
]
const Widget = ({ title, type }: { title: string; type: WidgetType }) => {
  switch (type) {
    case WidgetType.ToDoList:
      return <ToDoList items={items} />
    default:
      return <div>{title}</div>
  }
}

export default Widget
