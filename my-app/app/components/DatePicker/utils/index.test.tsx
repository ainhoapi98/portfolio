import {
  areRangesEqual,
  getQuickValue,
  isRangeSet,
} from 'elements/DatePicker/utils/index'
import { QuickOption } from 'elements/DatePicker/types'
import { expect } from '@storybook/test'

describe('elements/DatePicker/utils', () => {
  describe('isRangeSet', () => {
    it('should return true when range is set', () => {
      const result = isRangeSet(['2024-01-01', '2025-01-01'])
      expect(result).toBe(true)
    })
    it('should return false when range is null', () => {
      const result = isRangeSet([null, null])
      expect(result).toBe(false)
    })
    it('should return false when range is half set', () => {
      const result = isRangeSet(['2023-01-01', null])
      expect(result).toBe(false)
    })
  })

  describe('areRangesEqual', () => {
    it('should return true when ranges are equal', () => {
      const result = areRangesEqual(
        ['2024-01-01', '2025-01-01'],
        ['2024-01-01', '2025-01-01'],
      )
      expect(result).toBe(true)
    })
    it('should return false when range is null', () => {
      const result = areRangesEqual(['2024-01-01', '2025-01-01'], [null, null])
      expect(result).toBe(false)
    })
  })
  describe('getQuickValue', () => {
    const options: Array<QuickOption> = [
      {
        id: 'option1',
        label: <span>option1</span>,
        value: {
          primaryRange: ['2023-01-01', '2023-02-02'],
          secondaryRange: [null, null],
        },
      },
      {
        id: 'option2',
        label: <span>option2</span>,
        value: {
          primaryRange: ['2023-01-02', '2023-02-03'],
          secondaryRange: [null, null],
        },
      },
      {
        id: 'option3',
        label: <span>option3</span>,
        value: {
          primaryRange: ['2023-01-03', '2023-02-04'],
          secondaryRange: [null, null],
        },
      },
      {
        id: 'option4',
        label: <span>option4</span>,
        value: {
          primaryRange: ['2023-01-04', '2023-02-05'],
          secondaryRange: [null, null],
        },
      },
    ]
    it('should return the id of the selected quick value', () => {
      const result = getQuickValue(options, ['2023-01-01', '2023-02-02'])

      expect(result).toEqual('option1')
    })

    it('should return undefined if the option doesnt match', () => {
      const result = getQuickValue(options, ['2024-01-01', '2023-02-02'])

      expect(result).toEqual(undefined)
    })
  })
})
