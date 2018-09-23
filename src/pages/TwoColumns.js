import React, {Component} from 'react';
import Skills from '../pages/Skills';
class TwoColumns extends Component {
    render() {
        return (
            <div className="row position-relative">
                <div className="col-sm-7 content-place-holder animated fadeIn mb-sm-0 mb-3">
                    <div className="content h-100 px-4 py-5">
                        {this.props.children}
                    </div>
                </div>
                <Skills projects={this.props.projects}/>
            </div>
        );
    }
}

export default TwoColumns;
