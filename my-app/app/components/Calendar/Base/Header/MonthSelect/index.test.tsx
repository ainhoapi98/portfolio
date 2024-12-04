import userEvent from '@testing-library/user-event'
import mockdate from 'mockdate'
import dayjs from 'dayjs'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import MonthSelect from './index'

describe('components > FormElements > DatePicker > MonthSelect', () => {
  beforeEach(() => mockdate.set('2019-08-21T00:00:00Z'))
  afterEach(() => mockdate.reset())

  describe('<SelectMonth />', () => {
    it('should render all months as enabled when no range is given', () => {
      const { container, getAllByTestId } = render(
        <ThemeProvider theme={mockTheme}>
          <MonthSelect value={dayjs('2018-08-21')} onChange={jest.fn()} />
        </ThemeProvider>,
      )

      expect(container).toMatchSnapshot()

      expect(getAllByTestId('selected-head')).toHaveLength(2)
      expect(getAllByTestId('selected-head')[0]).toHaveTextContent('August')
    })

    it('should mark months as disabled when all days in the month are outside of the range', async () => {
      const { container, getAllByTestId } = render(
        <MonthSelect
          value={dayjs('2018-08-21')}
          minDate={dayjs('2018-06-01')}
          maxDate={dayjs('2018-10-31')}
          onChange={jest.fn()}
        />,
      )

      await userEvent.click(getAllByTestId('selected-head')[0])
      expect(container).toMatchSnapshot()
    })

    it('should mark months as enabled that have at least one day in the valid range', async () => {
      const { container, getAllByTestId } = render(
        <MonthSelect
          value={dayjs('2018-08-21')}
          minDate={dayjs('2018-05-31')}
          maxDate={dayjs('2018-11-01')}
          onChange={jest.fn()}
        />,
      )
      await userEvent.click(getAllByTestId('selected-head')[0])
      expect(container).toMatchSnapshot()
    })

    it('should merge the selected month into the value and call onChange', async () => {
      const onChange = jest.fn()
      const { getAllByTestId } = render(
        <MonthSelect value={dayjs('2018-08-21')} onChange={onChange} />,
      )
      await userEvent.click(getAllByTestId('selected-head')[0])
      await userEvent.click(getAllByTestId('select-dd-item')[8])

      expect(onChange).toHaveBeenCalledWith(
        equalToMoment(dayjs('2018-09-01T00:00:00Z'), 'day'),
      )
    })
  })

  describe('<SelectYear />', () => {
    it('should render the default years from [-2, +3] when no range is given', async () => {
      const { container, getAllByTestId } = render(
        <MonthSelect value={dayjs('2018-08-21')} onChange={jest.fn()} />,
      )
      await userEvent.click(getAllByTestId('selected-head')[1])
      expect(container).toMatchSnapshot()
    })

    it('should consider the given range for the selectable options', async () => {
      const { container, getAllByTestId } = render(
        <MonthSelect
          value={dayjs('2018-08-21')}
          minDate={dayjs('2018-01-01')}
          maxDate={dayjs('2023-01-01')}
          onChange={jest.fn()}
        />,
      )
      await userEvent.click(getAllByTestId('selected-head')[1])
      expect(container).toMatchSnapshot()
    })

    it('should merge the year into the value and call onChange', async () => {
      const onChange = jest.fn()
      const { getAllByTestId } = render(
        <MonthSelect value={dayjs('2018-08-21')} onChange={onChange} />,
      )
      await userEvent.click(getAllByTestId('selected-head')[1])
      await userEvent.click(getAllByTestId('select-dd-item')[3])

      expect(onChange).toHaveBeenCalledWith(equalToMoment(dayjs('2020-08-01')))
    })
  })
})
