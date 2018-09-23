import React ,{Component} from 'react';
import './css/App.css';
import './css/animate.css';
import Layout from './pages/Layout';
import Projects from './pages/Projects';
import ProjectItem from './pages/ProjectItem';
import Intro from './pages/Intro';
import Contact from './pages/Contact';
import $ from "jquery";
import {Helmet} from "react-helmet";
import {
    HashRouter,
    Route,
} from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            me: []
        }
    }

    componentDidMount() {
        let reactThis = this;
        $.ajax({
            method: "get",
            cache:false,
            url: "./data/projects.json",
            success: function (data) {
                reactThis.setState({projects: data});
            }
        });
        $.ajax({
            method: "get",
            cache:false,
            url: "./data/me.json",
            success: function (data) {
                reactThis.setState({me: data});
            }
        });
//            var currentMousePos = { x: -1, y: -1 };

//        $(document).mousemove(function(event) {
//            currentMousePos.x = event.pageX;
//            currentMousePos.y = event.pageY;
//            let x = Math.abs(currentMousePos.x - $('.play').offset().left);
//            let y = Math.abs(currentMousePos.y - $('.play').offset().top);
//            let dis = Math.sqrt((x * x) + (y * y));
//            console.log(dis/100)
//            $('.play').css({'animation-duration': (Math.floor(dis/100))+'s'})
//        });
                
    }
    render() {
        return (
            <HashRouter>
                <Layout projects={this.state.projects}>
                    <Helmet>
                        {this.state.projects.map((project, index) =>
                            <link rel="preload" as="image" href={project.thumb}/>
                        )}
                    </Helmet>
                    <Route path="/contact" render={() => <Contact me={this.state.me}/>}/>
                    <Route exact path="/intro" render={() => <Intro projects={this.state.projects}/>}/>
                    <Route path="/projects/:id" render={(params) => <ProjectItem params={params} projects={this.state.projects}/>}/>
                    <Route exact path="/projects" render={() => <Projects projects={this.state.projects}/>}/>
                    <Route exact path="/" render={() => <Intro/>}/>
                </Layout>
            </HashRouter>
        )
    }
}

export default App;
