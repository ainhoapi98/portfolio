import {StrictMode} from 'react'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'

// API
// Global Style
import GlobalStyle from 'styles'

// CSS
import 'react-grid-layout/css/styles.css'

// Components
import ErrorBoundary from 'components/ErrorBoundary'
import Main from "./containers";


export default function App() {
    return (
        <StrictMode>
            <ErrorBoundary>
                <GlobalStyle/>
                <BrowserRouter>
                    <Routes>
                        <Route path={'/'} element={<Main/>}/>
                        <Route
                            path={'*'}
                            element={<Navigate to={'/'}/>}
                        />
                    </Routes>
                </BrowserRouter>
            </ErrorBoundary>
        </StrictMode>
    )
}
