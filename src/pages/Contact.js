/**
 * Created by pedram on 5/2/2018.
 */
import React, {Component}
from 'react'
import $ from 'jquery';

class Contact extends Component {
    constructor() {
        super();
        this.state = {
          name: '',
          email: '',
          message: '',
          formMessage: ''
        };
      }
      onChange = (e) => {
          this.setState({ [e.target.name]: e.target.value });
      }
      onSubmit = (e) => {
              e.preventDefault();
              // get our form data out of state
              const { name, email, message } = this.state;
              var reactThis = this;
              $.ajax({
                  url:'/sendmail.php',
                  data:{ name:name, email:email, message:message },
                  method:'post',
                  dataType:'json',
                  success:function(result){
                      reactThis.setState({
                          formMessage:"Thank you, I'll check your message ASAP."
                      })
                  }
              });
            }
    render() {
        let links;
        if (this.props.me.links !== undefined) {
            links = Object.keys(this.props.me.links).map((social, link) =>
                <a target="_blank" className="link d-block" key={link} href={(social === 'Email') ? (e) => {
                        e.preventDefault();
                }:this.props.me.links[social]}>
                    <span className="social-name">{social}:</span>
                    <span className="social-link ml-2">{this.props.me.links[social]}</span>
                </a>
                )
        }

        return (
                <div className="row " style={{height: '80vh'}}>
                    <div className="col-md-12 contact-page content-place-holder  animated fadeIn">
                        <div className="content  project-page  m-0 p-4 ">
                            <div className="row m-0">
                                <div className="col-12 mb-3">
                                    <h3 className="text-center ">Contact me:</h3>
                                    <div className="separator"></div>
                                </div>
                            </div>
                            <div className="row m-0 d-flex">
                                <div className={"col-12 text-center alert alert-success animated fadeIn " + ((this.state.formMessage.length>0)?'d-block':'d-none')}>
                                    {this.state.formMessage}
                                </div>
                                <div className="col-6 text-center">
                                    {links}
                                </div>
                                <div className="col-6 text-center">

                                    <form onSubmit={this.onSubmit}>
                                        <div className="form-group">
                                            <input type="text" name="name" onChange={this.onChange} placeholder="Your Name" className="form-control"/>
                                        </div>
                                        <div className="form-group">

                                            <input type="email" required name="email" onChange={this.onChange} placeholder="Your Email" className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <textarea name="message" required onChange={this.onChange} placeholder="Your Message" className="form-control"></textarea>
                                        </div>
                                        <button type="Submit" className="project-link">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                            )
                }
    }
    export default Contact;
