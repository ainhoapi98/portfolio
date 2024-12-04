import { isDateWithinRange } from './index'
import dayjs from 'dayjs'

describe('elements/Calendars/utils', () => {
  describe('isDateWithinRange', () => {
    const minDate = dayjs('2024-01-01')
    const maxDate = dayjs('2024-12-01')

    it('should be before range', () => {
      const today = dayjs('2023-12-31')
      const result = isDateWithinRange(today, minDate, maxDate)
      expect(result).toBe(false)
    })

    it('should be after range', () => {
      const today = dayjs('2025-01-31')
      const result = isDateWithinRange(today, minDate, maxDate)
      expect(result).toBe(false)
    })

    it('should be within range', () => {
      const today = dayjs('2024-06-31')
      const result = isDateWithinRange(today, minDate, maxDate)
      expect(result).toBe(true)
    })
  })
})
