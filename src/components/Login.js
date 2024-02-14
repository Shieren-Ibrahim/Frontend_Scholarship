import React, { Component } from "react";
import axios from 'axios'
import Scholarships from "./Scholarships";
import TopBar from "./topbar/TopBar";
import { Link } from "react-router-dom";
import './style/style.css';
import './topbar/topbar.css';
import Footer from "./footer/Footer";
import ContactUs from "./ContactUs";
import SignUp from "./SignUp";
import AboutUs from "./AboutUS";
import ForgetPassW from "./ForgetPassW";
class Login extends Component {
    constructor() {
        super()
        this.state = {
            student: {},
            email: "",
            nav2: true,
            password: '',
            scholarships: [],
            contact:false,
            signup_nav:false,
            about:false,
            forget:false
        }
    }
    response_login(data) {
        if (data.res == 'ok') {
            this.setState(prev => ({ ...this.state, nav2: false, student: data.student, scholarships: data.scholarships }))
        }
        else if (data.res == 'error') {
            alert('error')
            this.setState(prev => ({ ...this.state }))
        }
    }
    login() {
        axios.post(`http://localhost:8000/login`, this.state)
        .then(res => this.response_login(res.data))
    }
    forgrt_password() {
        this.state.forget=true
        this.setState({...this.state})
    }
    navigator(){

    }
    contact(){
        this.state.contact=true
        this.setState({...this.state})
    }
    about(){
        this.state.about=true
        this.setState({...this.state})
    }
    signup_nav(){
        this.state.signup_nav=true
        this.setState({...this.state})
    }
    assignment(){
        this.state.email=this.props.email
        this.state.password=this.props.password
    }
    render() {
        this.props.email &&this.assignment()
        return (
            this.state.about?<AboutUs/>:
            this.state.signup_nav?<SignUp/>:
            this.state.contact?<ContactUs/>:
            this.state.forget?<ForgetPassW/>:
            !this.state.nav2 ?
            <Scholarships student={this.state.student} scholarships={this.state.scholarships} /> :
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
                            <li className="top_link" >HOME</li>
                            <li ><div onClick={() => this.about()}>ABOUT US</div></li>
                            <li ><div onClick={() => this.contact()}  >CONTACT</div></li>
                            <li className="topListItem" onClick={() => this.signup_nav()}>LOGOUT</li>               
                        </ul>
                    </div>
                </div>
                <div className="login">
                    <form className="loginform" id='loginform'>
                        <img className="loginimg" src="..\images\18-removebg-preview.png" alt="user" />
                        <h2 className="loginh2">login</h2>
                        <div className="login_input_box">
                            <input className="login_input"   placeholder="" type="text"  required value={this.state.email}
                            onChange={val => { this.setState({ ...this.state, email: val.target.value }) }} />
                            <span>Enter Your Email</span>
                        </div>
                        
                        <div className="login_input_box">
                            <input className="login_input" placeholder="" type='password' required value={this.props.password}
                            onChange={val => { this.setState({ ...this.state, password: val.target.value }) }} />
                            <span>Enter Your Password</span>
                        </div>
                        
                        <input className="loginbuttom" form="loginform" type="button" value='Login' onClick={() => this.login()} />
                        <p className="loginforget" onClick={() => this.forgrt_password()}>Forgetten Password ?</p>
                        
                        <div className="login_signup" id="signup">
                            <div className="loginlink" onClick={() => this.signup_nav()}>SignUp</div>
                        </div>
                    </form> 
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Login