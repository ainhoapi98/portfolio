import { createContext, PropsWithChildren } from 'react' // Types
import { QuickOption, RangeSelection } from 'types/dates'

export interface ContextProps {
  value: RangeSelection
  changeValue: (value: RangeSelection) => void
  format: string
  options: Array<QuickOption>
  handleOptionRename: (optionId: string, newName: string) => void
  handleOptionDelete: (optionId: string) => void
  onNavigateMonth?: (month: string, isPrev?: boolean) => void
  isSaveDisabled?: boolean
}

const defaultContextValues = {
  value: [null, null] as RangeSelection,
  changeValue: () => null,
  handleOptionRename: () => null,
  handleOptionDelete: () => null,
  format: 'DD.MM.YYYY',
  options: [],
}

export const Context = createContext<ContextProps>(defaultContextValues)

interface Props {
  value: RangeSelection
  setValue: (v: RangeSelection) => void
  options: Array<QuickOption>
  handleOptionRename: (optionId: string, newName: string) => void
  handleOptionDelete: (optionId: string) => void
  dateFormat?: string
  onNavigateMonth?: (month: string, isPrev?: boolean) => void
  maxOptions?: number
}

/**
 * Date Select context provider
 *
 * Note: The local state-management was removed from this context for performance
 * reasons. Use a state-management solution in a "place" that do not cause bottleneck
 *
 * @param value                         Default selected value
 * @param setValue                      Function to update the vale
 * @param dateFormat                    Format for the dateOptions to be rendered at ('YYYY-MM-DD', 'DD-MM-YYYY'...)
 * @param options                       Quick Select options
 * @param handleOptionRename            Handler to rename QS option
 * @param handleOptionDelete            Handler to delete QS option
 * @param renderRange                   Function to render range
 * @param onNavigateMonth               Handler that is called when the user navigates through calendar months
 * @param maxOptions                    Number of maximum options a user can save
 * @param children                      Children
 */
const DatePickerContextProvider = ({
  value,
  setValue,
  dateFormat = defaultContextValues.format,
  options,
  handleOptionRename,
  handleOptionDelete,
  onNavigateMonth,
  maxOptions,
  children,
}: PropsWithChildren<Props>) => {
  const isSaveDisabled = maxOptions ? options.length >= maxOptions : true
  return (
    <Context.Provider
      value={
        {
          value,
          changeValue: setValue,
          format: dateFormat,
          handleOptionDelete,
          handleOptionRename,
          options,
          onNavigateMonth,
          isSaveDisabled,
        } as ContextProps
      }
    >
      {children}
    </Context.Provider>
  )
}

export default DatePickerContextProvider
