import Header from "components/Header";
import {Outlet} from 'react-router-dom'
import {PageWrapper} from "./styled";

export default function Layout() {
    return (<PageWrapper>
        <Header/>
        <Outlet/>
    </PageWrapper>)
}