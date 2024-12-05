import usePopover from 'hooks/usePopover'
import { createContext } from 'react'

type ContextType = ReturnType<typeof usePopover> | null

const PopoverContext = createContext<ContextType>(null)

export default PopoverContext
