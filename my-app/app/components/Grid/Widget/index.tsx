import { WidgetType } from 'types/Widget'
import ToDoList from 'components/ToDoList'

const Widget = ({ title, type }: { title: string; type: WidgetType }) => {
  switch (type) {
    case WidgetType.ToDoList:
      return <ToDoList />
    default:
      return <div>{title}</div>
  }
}

export default Widget
