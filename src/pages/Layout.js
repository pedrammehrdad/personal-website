import React, {Component} from 'react';
import SiteNavigation from '../pages/SiteNavigation';
class Layout extends Component {
    componentDidMount() {
        if (document.querySelectorAll("#ss").length > 0) {
            // window.followCursor(document.querySelectorAll(".navigation a"), 60);
        }
    }

    render() {
        return (
            <div className="my-container">
                <div className="row mt-5 mb-1">
                    <div className="col-12"><SiteNavigation/></div>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default Layout;
