import { useEffect, useState } from 'react'
import { AutoSizer } from 'react-virtualized'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpDownLeftRight } from '@fortawesome/free-solid-svg-icons'

import { Layout, ReactGridLayoutProps } from 'react-grid-layout'

import {
  DragHandle,
  Layout as GridLayout,
  WidgetWrapper,
  Wrapper,
} from './styled'
import { Spacing } from 'styles'
import Widget from './Widget'

import { WidgetType } from 'types/Widget'

const initialLayout: Array<Layout> = [
  { i: WidgetType.ToDoList, x: 0, y: 0, w: 1, h: 1, static: false },
  { i: 'widget2', x: 2, y: 0, w: 1, h: 1, static: false },
  { i: 'widget3', x: 0, y: 1, w: 1, h: 1, static: false },
  { i: 'widget4', x: 1, y: 1, w: 1, h: 1, static: false },
  { i: 'widget5', x: 2, y: 1, w: 1, h: 1, static: false },
]

const Grid = () => {
  const [cols, setCols] = useState(4)
  const [layout, setLayout] = useState(initialLayout)
  const WIDGET_WIDTH = 340
  const WIDGET_SPACING = parseInt(Spacing.size400)

  /**
   * Calculate the number of columns by dividing the container width by
   * the widget width and its spacing (sides and in between columns)
   * @param containerWidth
   */
  const getDynamicCols = containerWidth => {
    const newCols = Math.max(1, Math.floor(containerWidth / WIDGET_WIDTH))

    return newCols * WIDGET_WIDTH + (newCols + 1) * WIDGET_SPACING >
      containerWidth
      ? newCols - 1
      : newCols
  }

  useEffect(() => {
    /**
     * Will update the layout when the window has been resized, changing the number of columns
     * if needed
     */
    const adjustedLayout = initialLayout.map((item, index) => ({
      ...item,
      x: index % cols,
      y: Math.floor(index / cols),
    }))
    setLayout(adjustedLayout)
  }, [cols])

  const props: ReactGridLayoutProps = {
    rowHeight: 400,
    margin: [parseInt(Spacing.size200), parseInt(Spacing.size600)] as [
      number,
      number,
    ],
    compactType: 'vertical',
    isDroppable: false,
    isDraggable: true,
    preventCollision: false,
    isResizable: false,
    draggableHandle: '.drag-handle',
    cols,
    layout,
  }

  return (
    <Wrapper>
      <AutoSizer style={{ flex: '1' }} data-testid={'grid-auto-sizer'}>
        {({ width, height: minHeight }) => {
          const dynamicCols = getDynamicCols(width)
          setCols(dynamicCols)

          return (
            <GridLayout
              {...{ ...props, width, minHeight }}
              data-testid={'dashboard-grid-layout'}
            >
              {layout.map(({ i }) => (
                <WidgetWrapper key={i}>
                  <DragHandle className="drag-handle">
                    <FontAwesomeIcon icon={faUpDownLeftRight} />
                  </DragHandle>
                  <Widget title={`Widget${i}`} type={i as WidgetType} />
                </WidgetWrapper>
              ))}
            </GridLayout>
          )
        }}
      </AutoSizer>
    </Wrapper>
  )
}

export default Grid
