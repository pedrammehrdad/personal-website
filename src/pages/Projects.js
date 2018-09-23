/**
 * Created by pedram on 5/2/2018.
 */
import React, {Component} from 'react'
import {
    NavLink
} from 'react-router-dom';
import $ from 'jquery';
import TwoColumns from './TwoColumns';
import ColoredScrollbars from '../pages/ColoredScrollbars';
class Projects extends Component {
    componentDidUpdate() {
        this.handleElements();
    }
    componentDidMount() {
     this.handleElements();
    }

    handleElements (){
        $('.project-item').on('mouseover', function () {
            var splited = $(this).data('skills').split(',');
            for (var index2 = 0; index2 < splited.length; index2++) {
                if (splited[index2] !== "") {
                    var v = '#' + splited[index2];
                    $(v).addClass('active');
                }
            }
        }).on('mouseout', function () {
            var splited = $(this).data('skills').split(',');
            for (var index2 = 0; index2 < splited.length; index2++) {
                if (splited[index2] !== "") {
                    var v = '#' + splited[index2];
                    $(v).removeClass('active');
                }
            }
        });   
    }

    render() {
        return (
            <TwoColumns projects={this.props.projects}>
                <h6>Click on the projects to see details:</h6>
                <ColoredScrollbars renderView={props => <div {...props} className="view projects-list"/>}>
                    {this.props.projects.map((project, index) =>
                        <div key={index} className="project-item selected col-6 mb-3 pb-3"
                             data-skills={project.skills.frontend.map((i, k) => i.replace(/ /g, '-').replace(/&|\./g, '-')) + ',' + project.skills.backend.map((i, k) => i.replace(/ /g, '-').replace(/&|\./g, '-'))}>
                            <NavLink title="Click to see details" to={`projects/${index}`}>
                            <div className="img-holder" style={{backgroundImage: 'url('+project.thumb+')',paddingTop:'80%',backgroundPosition:'center top',backgroundSize:'100%'}}>
                            </div>
                            <span className="project-name">{project.name}</span>
                            </NavLink>
                        </div>
                    )}
                </ColoredScrollbars>
            </TwoColumns>
        )
    }
}

export default Projects;
