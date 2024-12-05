import { useContext } from 'react'

// Contexts
import PopoverContext from 'contexts/PopoversContext'

function usePopoversContext() {
  const context = useContext(PopoverContext)

  if (context == null) {
    throw new Error(
      'Popover components must be wrapped in <PopoversProvider />',
    )
  }

  return context
}

export default usePopoversContext
