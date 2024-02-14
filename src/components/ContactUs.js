import React,{Component} from "react";
import './style/contact.css';
import axios from 'axios'
import TopBar from "./topbar/TopBar";
import Footer from './footer/Footer';
import Scholarships from "./Scholarships";
import { Link } from "react-router-dom";
import Login from "./Login";
import AboutUS from './AboutUS';
import SignUp from "./SignUp";
class ContactUs extends Component{
    constructor() {
        super()
        this.state = {
            fallName:'',
            email:'',
            msg:'',
            home:false,
            about:false,
            contact:false,
            signup_nav:false,
            student:{},
            scholarships:[],
        }
    }
        navigator(){
            this.state.home=true
            this.setState({...this.state})
        }
        about(){
            this.state.about=true
            this.setState({...this.state})
        }
        contact(){
            this.state.contact=true
            this.setState({...this.state})
        }
        signup_nav(){
            this.state.signup_nav=true
            this.setState({...this.state})
        }
        response_send(data) {
            if (data.res == 'ok') {
                alert('Your message send successfully')
                this.setState(prev => ({ ...this.state,msg:'',email:'',fallName:'' }))
            }
            else if (data.res == 'error') {
                alert('error')
                this.setState(prev => ({ ...this.state }))
            }
        }
        send() {
            axios.post(`http://localhost:8000/contact_us`, this.state)
            .then(res => this.response_send(res.data))
        }
        render(){
            this.state.student=this.props.student
            this.state.scholarships=this.props.scholarships
            return( 
                this.state.about?<AboutUS/>:
                this.state.home?<Login />:
                this.state.signup_nav?<SignUp />:
                <div>
                    <div className="top">
                        <div className="topLeft">
                            <div className="arrow_back" >
                                <i className=" fa fa-arrow-left" aria-hidden="true" onClick={() => this.navigator()}></i>
                            </div>
                            <div className="title_"> Shilarships Website</div>
                        </div>
                        <div className="topRight">
                            <ul className="topList">
                                <li className="top_link" onClick={() => this.navigator()}>HOME</li>
                                <li ><div onClick={() => this.about()}>ABOUT US</div></li>
                                <li onClick={() => this.contact()}>CONTACT</li>
                                <li className="topListItem" onClick={() => this.signup_nav()}>LOGOUT</li>               
                            </ul>
                        </div>
                    </div>
                    <section className="contact9">
                        <div className="content9">
                            <h2>Contact Us</h2>
                            <p>Hello, everyone! This is the LONGEST TEXT EVER! I was inspired by the 
                                various other "longest texts ever" on the internet, and I wanted to make my own. 
                            </p>
                        </div>

                        <div className="container9">
                            <div className="contactInfo9">
                                <div className="box9">
                                    <div className="icon9"><i class="fa fa-map-marker" aria-hidden="true"></i></div>
                                    <div className="text9">
                                        <h3>Address</h3>
                                        <p>Syria,Homs alarabia university</p>
                                    </div>
                                </div>

                                <div className="box9">
                                    <div className="icon9"><i class="fa fa-phone" aria-hidden="true"></i></div>
                                    <div className="text9">
                                        <h3>Phone</h3>
                                        <p>+936990909090</p>
                                    </div>

                                </div>

                                <div className="box9">
                                    <div className="icon9"><i class="fa fa-envelope-open" aria-hidden="true"></i></div>
                                    <div className="text9">
                                        <h3>Email</h3>
                                        <p>anyemaila@gmail.com</p>
                                    </div>

                                </div>

                            </div>

                            <div className="contactForm9">
                                <form>
                                    <h2>Send Message</h2>

                                    <div className="inputBox9">
                                        <input type="text" required 
                                        onChange={val => { this.setState({ ...this.state, fallName: val.target.value }) }}></input>
                                        <span>Full Name</span>
                                    </div>
                                    <div className="inputBox9">
                                        <input type="text" required 
                                        onChange={val => { this.setState({ ...this.state, email: val.target.value }) }}></input>
                                        <span>Email</span>
                                    </div>

                                    <div className="inputBox9">
                                        <textarea  required onChange={val => { this.setState({ ...this.state, msg: val.target.value }) }}></textarea>
                                        <span>Type Your Message ...</span>
                                    </div>

                                    <div className="inputBox9">
                                        <input type="button" value="Send" onClick={() => this.send()}  ></input>
                                    </div>
                                </form>

                            </div>

                        </div>
                    </section>
                <Footer/>
                </div>
            )
        }

}
export default ContactUs