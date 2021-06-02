import { Link } from 'gatsby';
import React from 'react'
import { Helmet } from 'react-helmet'
import * as style from './Layout.module.css'

const Layout = (props) =>{
    const {children,title} = props;
    return(
        <div>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <header className={style.test}>
                <img src="/imgfile.png"/>
                <ul>
                    <li><Link to="/">홈</Link>  </li>
                    <li> <Link to="/about">소개</Link> </li>
                </ul>
            </header>
            {children}
            <footer>
                <p>copylight 2021</p>
            </footer>
        </div>
    )
}

export default Layout