/**
 * Created by pedram on 5/2/2018.
 */
import React, {Component} from 'react'
import MyNavLink from '../MyNavLink'
import $ from 'jquery';

export default class Intro extends Component {

    componentDidMount() {
        var animationEnd = (function (el) {
            var animations = {
                animation: 'animationend',
                OAnimation: 'oAnimationEnd',
                MozAnimation: 'mozAnimationEnd',
                WebkitAnimation: 'webkitAnimationEnd',
            };

            for (var t in animations) {
                if (el.style[t] !== undefined) {
                    return animations[t];
                }
            }
        })(document.createElement('div'));
        $('.hello-box').on(animationEnd, function () {
            $('.me').addClass('fadeIn')
        })
    }

    render() {
        return (
            <div className="row  justify-content-center content-place-holder align-items-center "
                 style={{height: '80vh'}}>
                <div className="content col-md-10  project-page  m-0 p-5 hello-box animated zoomInUp ">
                    <div className="row m-0">
                        <div className="col-12 mb-3">
                            <MyNavLink to="/projects" className="close">
                            </MyNavLink>
                            <h3 className="text-center ">Hello & Welcome!</h3>
                            <div className="separator"></div>
                        </div>
                    </div>
                    <div className="row m-0 d-flex">
                        <div className="col-12 text-center me fade animated ">
                            My name is Mehrdad Pedram. I'm a Full Stack Web Developer;<br/>
                            Checkout my <MyNavLink to="/projects">portfolio</MyNavLink>, feel free to <MyNavLink
                            to="/contact">contact me</MyNavLink> :)
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
