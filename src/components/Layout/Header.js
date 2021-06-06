import { Link } from 'gatsby';
import React from 'react'
import * as headerstyle from '../../sass/Header.module.scss'

class PageHeader extends React.Component {
    render() {
        return (
            <div className={headerstyle.header}  >
                <Link to="/"><strong>Niena's </strong>Blog</Link>
                <ul className={headerstyle.icons}>
                    <li><object type="image/svg+xml" data="git_icon.svg" aria-labelledby="git1"/></li>
                    <li><object type="image/svg+xml" data="git_icon.svg" aria-labelledby="git2"/></li>
                </ul>
            </div>
        );
    }
}

export default PageHeader;
