import { Link } from 'gatsby';
import React from 'react'
import * as sidebarStyle from '../../sass/Sidebar.module.scss'
import * as mainStyle from '../../sass/Layout.module.scss'

class SideBar extends React.Component {
    slidebar(params) {

    }

    render() {
        return (
            <div>
                <div className={sidebarStyle.clideIcon}>icon</div>
                <div className={sidebarStyle.sidebar}>
                    {/*슬라이드 바*/}
                    <div id="slidebar" className={mainStyle.inner}></div>
                </div>
            </div>
        );
    }
}

export default SideBar;
