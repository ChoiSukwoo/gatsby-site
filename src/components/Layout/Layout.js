import { Helmet } from 'react-helmet'
import HeaderPage from './Header';
import * as mainstyle from '../../sass/Layout.module.scss'
import SideBar from './Sidebar';
import React from 'react';


const Layout = (props) => {
    const { children, title } = props;

    return (
        <div className={mainstyle.wrapper} >
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <div className={mainstyle.main}>
                <div className={mainstyle.inner}>
                    <header>
                        <HeaderPage />
                    </header>
                    {children}
                    <footer>
                        <p>copylight 2021</p>
                    </footer>
                </div>
            </div>
            <SideBar />
        </div>
    )
}

export default Layout