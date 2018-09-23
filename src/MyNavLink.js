/**
 * Created by pedram on 5/4/2018.
 */
import React, {Component} from 'react';
import {
    NavLink
} from 'react-router-dom';

class MyNavLink extends Component {
    render() {
        return <NavLink {...this.props} activeClassName="active"/>
    }
}

export default MyNavLink;