import React, { useState, useEffect } from 'react'
import * as sidebarStyle from '../../sass/Sidebar.module.scss'
import * as mainStyle from '../../sass/Layout.module.scss'
// import media from 'styled-media-query'

import MediaQuery from "react-responsive";
import { useMediaQuery } from "react-responsive";




const SliderButton = (props) => {

    function slideSideBar() {
        props.slideSideBar()
    }

    return (
        <div className={sidebarStyle.clickIcon} onClick={slideSideBar} />
    )
}

const SliderContext = (props) => {
    return (
        <div id="slidebar" className={mainStyle.inner}></div>
    )
}

const SideBar = (props) => {

    const isPc = useMediaQuery({ query: "(min-width: 1024px) and (max-width: 1279px)" });
    const isTablet = useMediaQuery({ query: "(min-width: 768px) and (max-width: 1023px)" });
    const isTabletPC = useMediaQuery({ query: "(min-width: 768px) and (max-width: 1279px)" });
    const isMobileTablet = useMediaQuery({ query: "(max-width: 1023px)" });
    const isMobile = useMediaQuery({ query: "(max-width: 767px)" });




    const Xmargine = 26

    const [Xposion, setPostion] = useState(0);
    const [DisplayType, setDisplay] = useState(props.displayType);

    function slideSideBar() {
        if (Xposion < 0) {
            setPostion(0);
        } else {
            setPostion(-Xmargine);
        }
    };

    useEffect(() => {
        setPostion(0);
    }, []);

    const web = (
        <div className={sidebarStyle.sidebar} style={{ marginLeft: `${Xposion}em` }} >
            <SliderButton slideSideBar={slideSideBar} />
            {/*슬라이드 바*/}
            <div class={sidebarStyle.context} >
                {props.displayType}
                <SliderContext />
            </div>
        </div>
    )

    const mobile = (
        <div className={sidebarStyle.sidebar} style={{ marginLeft: `-${Xposion}em` }} >
            <SliderButton slideSideBar={slideSideBar} />
            {/*슬라이드 바*/}
            <div class={sidebarStyle.context} >
                {props.displayType}
                <SliderContext />
            </div>
        </div>
    )


    return (
        (props.displayType === "fullscrean" || props.displayType === "web") ? web : mobile
    );

}


export default SideBar;
