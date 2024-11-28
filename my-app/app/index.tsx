import {StrictMode} from 'react'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'

// Global Style
import GlobalStyle from './styled'

// CSS
import 'react-grid-layout/css/styles.css'

// Components
import ErrorBoundary from 'components/ErrorBoundary'
import Layout from "containers";
import Homepage from "containers/Pages/Homepage";

// Types
import {Paths} from "types/routes";


export default function App() {
    return (
        <StrictMode>
            <ErrorBoundary>
                <GlobalStyle/>
                <BrowserRouter>
                    <Routes>
                        <Route path={'/'} element={<Layout/>}>
                            <Route
                                index={true}
                                element={<Navigate to={Paths.homepage}/>}
                            />
                            <Route
                                path={Paths.homepage}
                                element={<Homepage/>}
                            />
                        </Route>
                        <Route
                            path={'*'}
                            element={<Navigate to={Paths.homepage}/>}
                        />
                    </Routes>
                </BrowserRouter>
            </ErrorBoundary>
        </StrictMode>
    )
}
