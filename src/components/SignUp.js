import React, { Component } from "react";

import axios from 'axios'
import './style/style1.css';
import Confirm from "./Confirm";
import TopBar from "./topbar/TopBar";
import { Link } from "react-router-dom";
import Footer from "./footer/Footer";
import Login from "./Login";
import ContactUs from "./ContactUs";
import AboutUS from './AboutUS';

class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      nav: true,
      login_nav:false,
      contact:false,about:false
    }
  }
  
about(){
  this.state.about=true
  this.setState({...this.state})
}
contact(){
    this.state.contact=true
    this.setState({...this.state})
}
navigator(){
  this.state.login_nav=true
  this.setState({...this.state})
}
yes(d) {
    d=='no'?this.exist():this.notexite()
  
  }
notexite(){
    alert("review your email");
    this.setState(prev => ({ email: prev.email, nav: false }))
  }
exist() {
    alert("exists email");
    this.setState({...this.state,email:''})
  }
no() {
    alert("error");
    this.setState(prev => ({ email: "", nav: true }))
  }

overhandler2() { 
  axios.post(`http://localhost:8000/signup`, this.state)
      .then(res => res.data.res ?
        this.yes(res.data.st)
        : this.no())
  }
overhandler(val ){
   this.setState({ email: val.target.value }) 
  }

  render() {
    return (
      this.state.about?<AboutUS/>:
      this.state.contact?<ContactUs/>:
      this.state.login_nav?<Login/>:
      this.state.nav ?
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
                <li ><div onClick={() => this.contact()}>CONTACT</div></li>
                <li className="topListItem">LOGOUT</li>               
              </ul>
            </div>
            </div>
      <div className="basesignup">
        <form className="signupform">
          <img className="signupimg" src="..\images\18-removebg-preview.png" alt="user" />
          <h2 className="signuph2">SignUp</h2>
          <div className="signup_input_box">
            <input className="signupemail" placeholder="" type="text" required
            value={this.state.email} onChange={(val)=> this.overhandler(val)} />
            <span>Enter Your Email</span>
          </div>
          
          <input className="signupbuttom" type="button" value='SignUp' onClick={()=> this.overhandler2()}/>
          <div className="signup_login" >
            <div className="signuplink" onClick={() => this.navigator()}>Login</div>
          </div>
            
        </form>
        
        </div><Footer/>
        </div>
        : <Confirm email={this.state.email}/>

    )

  }


}

export default SignUp