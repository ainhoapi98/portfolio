import { Outlet } from 'react-router-dom'

import { PageWrapper } from './styled' // Providers
import ModalsProvider from 'providers/Modals'
import PopoversProvider from 'providers/Popovers' // Components
import Modals from './Modals'
import Header from 'components/Header'
import Popovers from './Popovers'

export default function Layout() {
  return (
    <PopoversProvider>
      <PageWrapper>
        <Header />
        <Outlet />
      </PageWrapper>
      <ModalsProvider closeOnEscape={false}>
        <Modals />
        <Popovers />
      </ModalsProvider>
    </PopoversProvider>
  )
}
