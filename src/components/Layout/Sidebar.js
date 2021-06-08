import React, { useState, useEffect } from 'react'
import { debounce } from 'lodash';
import * as sidebarStyle from '../../sass/Sidebar.module.scss'
import * as mainStyle from '../../sass/Layout.module.scss'
// import media from 'styled-media-query'
import MediaQuery, { useMediaQuery } from "react-responsive";
// import * as PC from '/tsx/MediaQuery.tsx';




const SliderButton = (props) => {

    return (
        <label htmlFor="menuicon" className={sidebarStyle.sidebar_menuicon}>
            <span></span><span></span><span></span>
        </label>
    )
}

const SliderContext = (props) => {
    return (
        <div className={sidebarStyle.sidebar_context}> 사이드바</div>
    )
}

const SideBar = (props) => {


    return (
        <div className={sidebarStyle.sidebar} >
            <input type="checkbox" id="menuicon" className={sidebarStyle.checkbox} />
            <div className={sidebarStyle.sidebar_inner} >
                <SliderButton />
                <SliderContext />
            </div>
        </div>
    );

}


export default SideBar;
