import { createContext } from 'react'
import useModals from 'hooks/useModals'

type ContextType = ReturnType<typeof useModals> | null

const Index = createContext<ContextType>(null)

export default Index
