import {
  MutableRefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'

// Types
import { QuickOption } from 'components/DatePicker/types'

// Context
import { Context } from 'components/DatePicker/Context'

// Styles
import {
  ActionWrapper,
  EditInput,
  Option as OptionWrapper,
  OptionButton,
  OptionLabel,
} from './styled'

// Hooks
import { useOutsideClick } from 'hooks/index'
import { faClose, faPen } from '@fortawesome/free-solid-svg-icons'

interface Props {
  isSelected: boolean
  handleClick: (option: QuickOption) => () => void
  option: QuickOption
}

export const Option = ({ isSelected, handleClick, option }: Props) => {
  const [isRenaming, setIsRenaming] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const { handleOptionRename, handleOptionDelete } = useContext(Context)

  const handleClickOutside = () => {
    setIsRenaming(false)
  }
  const ref = useOutsideClick(
    handleClickOutside,
  ) as MutableRefObject<HTMLButtonElement | null>

  const handleClickEdit = () => {
    setIsRenaming(true)
  }

  const handleClickDelete = () => {
    handleOptionDelete(option.id)
  }

  const handleEditBlur = () => {
    setIsRenaming(false)
    if (!inputRef.current) {
      console.error('inputRef element in Option not defined!')
      return
    }

    const value = inputRef.current.value.trim()
    if (!value) {
      return
    }

    handleOptionRename(option.id, value)
  }

  useEffect(() => {
    function handleEnterPress(event: KeyboardEvent) {
      if (event.key !== 'Enter') return

      handleEditBlur()
      event.preventDefault()
    }

    if (isRenaming) {
      inputRef.current?.focus()
      // Make sure this code gets executed after the DOM is loaded.
      inputRef.current?.addEventListener('keyup', handleEnterPress)
    }

    return () => {
      inputRef.current?.removeEventListener('keyup', handleEnterPress)
    }
  }, [isRenaming])

  return (
    <OptionWrapper
      ref={ref}
      $variant={'secondary'}
      data-testid={'qs-option'}
      $isSelected={isSelected}
      onClick={handleClick(option)}
    >
      {isRenaming ? (
        <EditInput
          id={`${option.id}-edit`}
          ref={inputRef}
          maxWidth={ref.current?.clientWidth || 100}
          placeholder={(option.label as string) || ''}
          onBlur={handleEditBlur}
          onSubmit={handleEditBlur}
        />
      ) : (
        <>
          <OptionLabel>{option.label}</OptionLabel>
          <ActionWrapper>
            <OptionButton onClick={handleClickEdit} icon={faPen} />
            <OptionButton onClick={handleClickDelete} icon={faClose} />
          </ActionWrapper>
        </>
      )}
    </OptionWrapper>
  )
}

export default Option
