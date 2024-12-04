import dayjs, { ConfigType } from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
dayjs.extend(isBetween)

/**
 * Determines whether the date is withing the specified range limits
 * @param date        Date to be analyzed
 * @param minDate     Earliest valid date
 * @param maxDate     Latest valid date
 */
export const isDateWithinRange = (
  date: ConfigType,
  minDate: ConfigType,
  maxDate: ConfigType,
) => {
  if (!minDate && !maxDate) {
    return true
  }

  if (minDate && maxDate) {
    return dayjs(date).isBetween(minDate, maxDate, 'day', '[]')
  }

  if (maxDate) {
    return dayjs(date).isBefore(maxDate, 'day')
  }

  if (minDate) {
    return dayjs(date).isAfter(minDate, 'day')
  }

  return true
}
