/**
 * Created by pedram on 5/2/2018.
 */
import React, {Component} from 'react'
import MyNavLink from '../MyNavLink';

import ColoredScrollbars from '../pages/ColoredScrollbars';
import $ from 'jquery';

class ProjectItem extends Component {

    componentDidMount() {
        $('.animated').addClass('fadeInDown');

    }

    componentWillAppear(callback) {
        callback();
        console.log('componentWillAppear');
    }

    componentDidAppear() {
        console.log('componentDidAppear');
    }

    componentWillEnter(callback) {
        callback();
        console.log('componentWillEnter');
    }

    componentDidEnter() {
        console.log('componentDidEnter');
    }

    componentWillLeave(callback) {
        callback();
        console.log('componentWillLeave');
    }

    componentDidLeave() {
        console.log('componentDidLeave');
    }

    // componentWillLeave(callback){
    //     alert(2)
    //     $('.animated').addClass('fadeOut');
    //     var animationEnd = (function (el) {
    //         var animations = {
    //             animation: 'animationend',
    //             OAnimation: 'oAnimationEnd',
    //             MozAnimation: 'mozAnimationEnd',
    //             WebkitAnimation: 'webkitAnimationEnd',
    //         };
    //
    //         for (var t in animations) {
    //             if (el.style[t] !== undefined) {
    //                 return animations[t];
    //             }
    //         }
    //     })(document.createElement('div'));
    //     $('.animated').on(animationEnd, function () {
    //         alert()
    //         return callback();
    //     })
    // }
    render() {
        if(this.props.projects.length>0){
        let projectId = parseInt(this.props.params.match.params.id, 10);
        let thisProject = this.props.projects[projectId];
        let previous = ((projectId - 1) < 0) ? this.props.projects.length - 1 : projectId - 1;
        let next = ((projectId + 1) > (this.props.projects.length - 1)) ? 0 : projectId + 1;
        //return <div>{projectId}</div>;
        return (
            <div className="row" key="122312134124124" name="345435" >
                <div className="col-12 content-place-holder animated ">
                    <div className="content project-page  m-0 p-4 ">
                        <div className="row m-0">
                            <div className="col-12 mb-3">
                                <MyNavLink to="/projects" className="close">
                                </MyNavLink>
                                <h3 className="text-center project-title">{thisProject.name}</h3>
                                <div className="separator"></div>
                            </div>
                        </div>
                        <div className="row m-0 d-flex">
                            <MyNavLink to={`/projects/${previous}`} className="arrow arrow-left d-sm-inline-block d-none">
                                <span className="icon"></span>
                                <span className="arrow-text">Previous Project</span>
                            </MyNavLink>
                            <MyNavLink to={`/projects/${next}`} className="arrow arrow-right d-sm-inline-block d-none">
                                <span className="icon"></span>
                                <span className="arrow-text">Next Project</span>
                            </MyNavLink>
                            <div className="col-sm-5 project-info  mb-sm-0 mb-3">
                                <h4>Description:</h4>
                                <div className="description">
                                    {thisProject.description.split('\n').map((item, key) => {
                                        return <p key={key}>{item}</p>
                                    })}
                                </div>
                                <h4>Technologies & Tools:</h4>
                                <div className="project-skills">
                                    {
                                        thisProject.skills.backend.map((key, index) =>
                                            <span className="skill-item" key={key}>{key}, </span>
                                        )
                                    }
                                    {
                                        thisProject.skills.frontend.map((key, index) =>
                                            <span className="skill-item" key={key}>{key}, </span>
                                        )
                                    }
                                </div>
                                {(thisProject.url !== "") ?
                                    <a href={thisProject.url} target="_blank" className="project-link">
                                        <img className="mr-2" alt=""
                                             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApElEQVQ4jZ2SzQrDMAyDpRFy2jMX2tuetocx0vWiHZaB5zohRGAIsfWh/EDSLqmYSjCStLq+rR11YeUBkPRQrGIBd0lZErw6kHIzcyfJk+QFUPdel0al/xLkcOA7s4wcIQQE5sUcpw+IzO5O2oCW2V3sOgr4M1ulVoPkpvqkJLfW3NAr9NRM0FNNlqYBADKAN4DDAsJv3AHAJ3jOREkAjhlj1fEBhjphv3KoegkAAAAASUVORK5CYII="/>
                                        See the project
                                    </a> :
                                    <a href={(e) => {e.preventDefault();}} className="project-link disabled">
                                        Unfortunately I can't provide a link for this project.
                                    </a>
                                }
                            </div>
                            <div className="col-sm-7 project-image">
                                <img className="w-100" alt={thisProject.url} src=" data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA2oAAAAsCAYAAAAUwkvnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0OTNBM0VDRTU1RTExMUU4OUU1Q0E2RjFCOTVBNDVEOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0OTNBM0VDRjU1RTExMUU4OUU1Q0E2RjFCOTVBNDVEOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ5M0EzRUNDNTVFMTExRTg5RTVDQTZGMUI5NUE0NUQ4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQ5M0EzRUNENTVFMTExRTg5RTVDQTZGMUI5NUE0NUQ4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ybsoDgAAA/hJREFUeNrs3TtPm1cAgOGDgdBwSQBhBEm4hcvAQJdEbZWKhQEhMVLYUdk6dcnQH9Al/QsduqZLf0BFh0qVqkiRGAyKQQTETTBwC4kiJaE+lkhbbv0gppjoeQYE/j6dY468vLJ9TklHR0c4SWdn5xf37t0b6e7u/jKdTnfU1NSkAwAAAGe2u7u7kTOfzWZ/f/Lkyc9zc3N/nHRvyXGhlguzB6Ojo49yofa55QQAACi8mZmZ3x4/fvxwfn7+z8PXSuvq6v6utpzh4eHvJiYmfqqvr2+xdAAAABejoaGhvb+//+tr1659Mj09PZl7aP9IqMVIGx8f/3FwcPDb+LtlAwAAuFixvQ6+avb06dNfjoTayMjI9wMDA99YKgAAgP9XS0vLp+Xl5RWZTObX+Hcq/ogFNzQ09NDyAAAAXI7YZHG/kPehNjY29sjHHQEAAC5PbLJcm/2QD7W4Bf/du3c/sywAAACXK7ZZbLTU/fv3v7IcAAAAxSGeZV3W1dX1wFIAAAAUh/g9tbLGxsZOSwEAAFAcco3Wlaqqqqq3FAAAAMUhNlrKbo8AAADFIzZayjIAAAAUF6EGAAAg1AAAABBqAAAAQg0AAIDzKruogRsbG8OdO3dCdXV1ePPmTdjc3AzPnz8Pr169OvNYtbW1obW1Ndy4cSP/987OTlhcXAxbW1tnHuv69euhvb091NXVhbKysvDixYuwtLQU1tfXvRoAAICiUDI5Oblf6EF7enrCrVu3jjz+9u3bMDU1Fba3txOP1dzcnB/v8CkC+/v74dmzZ2F1dTXxWDdv3gx9fX2htLT0yLWVlZX8eAAAAJet4B99jO+kHRdpUQyk3t7ekEolmza++9Xd3R2OO+otPhavxXsS/aO5OePcx0VaFJ9zOp32igAAAD6+ULt9+/ap1ysqKkJDQ0OisWI8nRZ18dpJUXhYjLA492niRzUBAAA+ulCrqakpyD3RwXfSPvSeKH5XrhD3AAAAXLlQu8qO+4glAADAlQ+13d3d/7wn7rRYqLGS3JN0zqRjAQAAXKlQW15ePvX669evw8bGRqKx4k6McXfHk7x79y5/TxJxzjj3hzx3AACAKxlq8Tyyk+Ipbs+fyWTygZXEy5cvQzabPTbW4mOzs7P5e5KIc8a543M4KQqdpQYAABSDCzlHLWpqasrvAFlVVZWPo4MDr5OG1T/FA6/b2tr+deD1wsLCuQ68rqysfH/gddyqf29vL/9O2tramlcDAADwcYcaAAAA52PXRwAAAKEGAACAUAMAABBqAAAACDUAAAChBgAAgFADAAAQagAAAAg1AAAAoQYAAIBQAwAAQKgBAAAINQAAAIQaAACAUAMAAKDg/hJgADs4BMZB6w1WAAAAAElFTkSuQmCC"/>
                                <ColoredScrollbars renderView={props => <div {...props} className="view  "/>}>
                                    <div className="w-100">
                                        <img src={thisProject.image} alt={thisProject.name} className="w-100"/>
                                    </div>
                                </ColoredScrollbars>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )}
        return <div></div>
    }
}
export default ProjectItem;
