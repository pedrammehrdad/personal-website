import React, {Component} from 'react';
import $ from 'jquery';
import ColoredScrollbars from '../pages/ColoredScrollbars';

class Skills extends Component {

    handleSelcted() {
        let selected = [];
        $.each($('.skill-item.selected'), function (index, el) {
            if ($(el).attr('id') !== "reset")
                selected.push($(el).attr('id'));
        });
        $.each($('.projects-list .project-item'), function (index, el) {
            let exist = true;
            for (let i = 0; i < selected.length; i++) {
                let skills = $(el).data('skills').split(',');
                if ($.inArray(selected[i], skills) === -1) {
                    $(el).removeClass('selected').fadeOut();
                    exist = false;
                }
            }
            if (exist) {
                $(el).addClass('selected').fadeIn();
                if ($('.not-found').length > 0) {
                    $('.not-found').fadeOut('normal', function () {
                        $('.not-found').remove();
                    });
                }
            }
        }).promise().done(function () {
            if ($('.project-item.selected').length < 1) {
                var skills = "";
                $('.skill-item.selected').map(function (index, textObj) {
                    skills += $(textObj).text();
                    if ($('.skill-item.selected').length - 1 > index)
                        skills += ", ";
                    return skills;
                });
                if ($('.not-found').length < 1)
                    $('.projects-list').append("<p class='not-found'>Well, unfortunately, I don't have a project with all the following skills together: <br/><span class='selected-skills'>" + skills + "</span></p>");
                else
                    $('.not-found .selected-skills').text(skills);
            }
        });
    }
    handleElements() {
        $('.skill-item').off('click');
        let reactThis = this;
        $('.skill-item').on('click', function (e) {
            let clicked = this;
            if ($(clicked).attr('id') === "reset") {
                $('.skill-item.selected').removeClass('selected')
//                $.each($('.skill-item.selected'), function (index, el) {
//                    $(el).trigger('click');
//                });
                reactThis.handleSelcted();

            } else {
                if ($(clicked).hasClass('selected')) {
                    $(clicked).removeClass('selected');
                } else {
                    $(clicked).addClass('selected');
                }
                reactThis.handleSelcted();
            }
        })

    }

    componentDidUpdate() {
        this.handleElements();
    }

    componentDidMount() {
        this.handleElements();
    }

    render() {
        let frontendSkills = [];
        let backendSkills = [];

        for (var projectIndex in this.props.projects) {
            let project = this.props.projects[projectIndex];
            for (var skillIndex in project.skills.frontend) {
                let skill = project.skills.frontend[skillIndex];
                if (frontendSkills[skill] === undefined)
                    frontendSkills[skill] = 1;
                else
                    frontendSkills[skill]++;
            }

            for (var skillIndex2 in project.skills.backend) {
                let skill = project.skills.backend[skillIndex2];
                if (backendSkills[skill] === undefined)
                    backendSkills[skill] = 1;
                else
                    backendSkills[skill]++;
            }
        }
        let textRatio = 1.1;
        return (
                <div className="col-sm-5  content-place-holder animated fadeIn">
                    <div className="content p-3 p-sm-5 skills">
                        <ColoredScrollbars renderView={props => <div {...props} className="view  "/>}>
                
                            <h6>Click tools and techs to filter the projects:</h6>
                            <h3 className="skill-header mt-3">Back-end</h3>
                            <hr className="my-2"/>
                            {Object.keys(backendSkills).map((key, index) =>
                                <span title="Click to filter the projects" className="skill-item" id={key.replace(/ /g, '-').replace(/&|\./g, '-')}
                                      style={{fontSize: .8 + ((textRatio * backendSkills[key]) / this.props.projects.length) + "rem"}}
                    
                                      key={index}>{key}<span className="deselect"></span></span>
                                    )}
                            <h3 className="mt-5 skill-header">Front-end</h3>
                            <hr className="my-2"/>
                            {Object.keys(frontendSkills).map((key, index) =>
                                    <span title="Click to filter the projects" className="skill-item" id={key.replace(/ /g, '-').replace(/&|\./g, '-')}
                                          style={{fontSize: .8 + ((textRatio * frontendSkills[key]) / this.props.projects.length) + "rem"}}
                                          key={index}>{key}<span className="deselect"></span></span>
                                              )
                            }
                            <div className="text-right">
                                <span className="skill-item selected " id="reset">
                                    Reset
                                    <span className="deselect"></span>
                                </span>
                            </div>
                        </ColoredScrollbars>
                    </div>
                </div>
                        );
            }
        }

        export default Skills;
