import React, { useState, useEffect } from 'react'
import { debounce } from 'lodash';
import * as sidebarStyle from '../../sass/Sidebar.module.scss'
import * as mainStyle from '../../sass/Layout.module.scss'
// import media from 'styled-media-query'
import MediaQuery, { useMediaQuery } from "react-responsive";
// import * as PC from '/tsx/MediaQuery.tsx';




const SliderButton = (props) => {

    function slideSideBar() {
        props.slideSideBar()
    }

    return (
        <div role="button" className={sidebarStyle.clickIcon} onClick={slideSideBar} style={{ marginLeft: `${props.margin}em` }} />
    )
}

const SliderContext = (props) => {
    return (
        <div id="slidebar" className={mainStyle.inner}></div>
    )
}

const SideBar = (props) => {



    const SizeType = {
        mobile: 736,
        tablet: 1280,
        web: 1680
    }

    const [MarginValue, setMargineValue] = useState();
    const [SideMargin, setSideMargine] = useState();
    const [SideState, setSideState] = useState();
    const [DisplayType, setDisplayType] = useState();


    function slideSideBar(init) {
        if (init == "open" || SideState == "close") {
            setSideState("open");
            setSideMargine(0);
        } else {
            setSideState("close");
            setSideMargine(-MarginValue);
        }
    };

    function settingState() {
        if (typeof window !== 'undefined') {
            if (SizeType.mobile > window.innerWidth) {
                if (DisplayType !== "mobile") {
                    setDisplayType("mobile");
                    setMargineValue(24)
                    if (SideState != "close") {
                        slideSideBar("close")
                    }
                }
            } else if (SizeType.tablet > window.innerWidth) {
                if (DisplayType !== "tablet") {
                    setDisplayType("tablet");
                    setMargineValue(24)
                    if (SideState != "close") {
                        slideSideBar("close")
                    }
                }
            } else if (SizeType.web > window.innerWidth) {
                if (DisplayType !== "web") {
                    setDisplayType("web");
                    setMargineValue(24)
                    if (SideState != "open") {
                        slideSideBar("open")
                    }
                }
            } else {
                if (DisplayType !== "fullscrean") {
                    setDisplayType("fullscrean");
                    setMargineValue(26)
                    if (SideState != "open") {
                        slideSideBar("open")
                    }
                }
            }

        }
    }

    //windowSize 상태를 생성하고 setWindowSize에 width,height 파라매터를받아 windowSize에 추가하겟다
    //handleResize 실행시 setWindowSize 실행하여 windowSize에 값을 window.innerWidth 와 window.innerHeight로변경
    //debounce 를통해 0.5초의 대기시간 추가
    const handleResize = debounce(() => {
        settingState()
    }, 100)

    //useEffect 컴포넌트생성시 윈도우의 resize 발생떄 handleResize추가
    //다른 useEffect 시 발생을 막기위해 반환떄 삭제
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => { // cleanup 
            window.removeEventListener('resize', handleResize);
        }
    }, [SideState, DisplayType, SideMargin]);


    settingState()


    const webStyle = (
        <div className={sidebarStyle.sidebar} style={{ marginLeft: `${SideMargin}em` }} >
            <div class={sidebarStyle.context} >
                <SliderButton slideSideBar={slideSideBar} />
                {DisplayType}<br />
                {MarginValue}<br />
                {SideMargin}<br />
                {SideState}
                <SliderContext />
            </div>
        </div>
    )

    const mobileStyle = (
        <div className={sidebarStyle.sidebar}  >
            <div class={sidebarStyle.context} style={{ marginLeft: `${SideMargin}em` }}>
                <SliderButton slideSideBar={slideSideBar} />
                {DisplayType}<br />
                {MarginValue}<br />
                {SideMargin}<br />
                {SideState}
                <SliderContext />
            </div>
        </div>
    )


    return (
        (DisplayType == "mobile" || DisplayType == "tablet") ? mobileStyle : webStyle
    );

}


export default SideBar;
