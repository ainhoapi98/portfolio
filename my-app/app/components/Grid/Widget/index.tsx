import { WidgetType } from 'types/Widget'
import ToDoList from 'components/ToDoList'
import Weather from 'components/Weather'

const Widget = ({ title, type }: { title: string; type: WidgetType }) => {
  switch (type) {
    case WidgetType.ToDoList:
      return <ToDoList />
    case WidgetType.Weather:
      return <Weather />
    default:
      return <div>{title}</div>
  }
}

export default Widget
