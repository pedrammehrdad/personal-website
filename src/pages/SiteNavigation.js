import React, {Component} from 'react';
import MyNavLink from '../MyNavLink'

class SiteNavigation extends Component {
    render() {
        return (
            <ul className="list-unstyled navigation m-0">
                <li>
                    <MyNavLink to="/Intro"><span className="link-text">Profile</span></MyNavLink>
                </li>
                <li>
                    <MyNavLink to="/Projects">
                        <span className="link-text">Portfolio</span>
                    </MyNavLink>
                </li>
                <li>
                    <MyNavLink to="/Contact">
                        <span className="link-text">Contact</span>
                    </MyNavLink>
                </li>
            </ul>
        );
    }
}

export default SiteNavigation;
