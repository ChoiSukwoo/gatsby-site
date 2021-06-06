import { Helmet } from 'react-helmet'
import HeaderPage from './Header';
import * as mainstyle from '../../sass/Layout.module.scss'
import SideBar from './Sidebar';
import React, { useEffect, useState } from 'react';
import { debounce } from 'lodash';

const SizeType = {
    mobile :736,
    tablet :1280,
    web :1680
}

const Layout = (props) => {
    const { children, title } = props;

    //windowSize 상태를 생성하고 setWindowSize에 width,height 파라매터를받아 windowSize에 추가하겟다
    const [DisplayType, setDisplayType] = useState();

    //handleResize 실행시 setWindowSize 실행하여 windowSize에 값을 window.innerWidth 와 window.innerHeight로변경
    //debounce 를통해 0.5초의 대기시간 추가
    const handleResize = debounce(() => {
        if(SizeType.mobile>window.innerWidth){
            if(DisplayType !== "mobile"){ setDisplayType("mobile");}
        }else if(SizeType.tablet>window.innerWidth){
            if(DisplayType !== "tablet"){ setDisplayType("tablet");}
        }else if(SizeType.web>window.innerWidth){
            if(DisplayType !== "web"){ setDisplayType("web");}
        }else {
            if(DisplayType !== "fullscrean"){ setDisplayType("fullscrean");}
        }
    }, 100)

    //useEffect 컴포넌트생성시 윈도우의 resize 발생떄 handleResize추가
    //다른 useEffect 시 발생을 막기위해 반환떄 삭제
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize()
        return () => { // cleanup 
            window.removeEventListener('resize', handleResize);
        }
    }, []);

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
                    <div>브라우저 타입 : {DisplayType}</div>
                    <footer>
                        <p>copylight 2021</p>
                    </footer>
                </div>
            </div>
            <SideBar displayType={DisplayType}/>
        </div>
    )
}

export default Layout