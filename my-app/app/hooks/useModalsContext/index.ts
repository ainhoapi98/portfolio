import { useContext } from 'react'

// Contexts
import Index from 'contexts/ModalsContext'

function useModalsContext() {
  const context = useContext(Index)

  if (context == null) {
    throw new Error('Modal components must be wrapped in <ModalsProvider />')
  }

  return context
}

export default useModalsContext
