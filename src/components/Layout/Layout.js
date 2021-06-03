import { Link } from 'gatsby';
import React from 'react'
import { Helmet } from 'react-helmet'
import * as style from '../../sass/Layout.module.css'
import HeaderPage from './Header';



const Layout = (props) =>{
    const {children,title} = props;
    return(
        <div>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <header>
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                <HeaderPage />
            </header>
            {children}
            <footer>
                <p>copylight 2021</p>
            </footer>
        </div>
    )
}

export default Layout