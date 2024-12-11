import { StrictMode } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'

// Styles
import GlobalStyle from './styled'
import 'react-grid-layout/css/styles.css'

// Components
import ErrorBoundary from 'components/ErrorBoundary'
import Homepage from 'containers/Pages/Homepage'
import Layout from 'containers'

// Types
import { Paths } from 'types/routes'
import { store } from './store'

export default function App() {
  return (
    <StrictMode>
      <ErrorBoundary>
        <Provider store={store}>
          <GlobalStyle />
          <BrowserRouter>
            <Routes>
              <Route path={'/'} element={<Layout />}>
                <Route
                  index={true}
                  element={<Navigate to={Paths.homepage} />}
                />
                <Route path={Paths.homepage} element={<Homepage />} />
              </Route>
              <Route path={'*'} element={<Navigate to={Paths.homepage} />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </ErrorBoundary>
    </StrictMode>
  )
}
