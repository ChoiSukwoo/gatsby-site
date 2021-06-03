import React from 'react'
import * as headerstyle from '../../sass/Header.module.css'
import * as mainstyle from '../../sass/Layout.module.css'

class PageHeader extends React.Component {
    render() {
        return (
            <div className={[mainstyle.defalutBackground, headerstyle.header].join(' ')}  >
                <div className={mainstyle.inner}>
                    <a><strong>Niena's </strong>Blog</a>
                    <ul className={headerstyle.icons}>
                        <li>아이콘1</li>
                        <li>아이콘2</li>
                        <li>아이콘3</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default PageHeader;
