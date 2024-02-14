import React, { Component } from "react";

import axios from 'axios'
import './style/forget.css';
import Confirm from "./Confirm";
import TopBar from "./topbar/TopBar";
import { Link } from "react-router-dom";
import Footer from "./footer/Footer";
import Login from "./Login";
import ContactUs from "./ContactUs";
import AboutUS from './AboutUS';
const link = 'https://oylssou24h-496ff2e9c6d22116-8000-colab.googleusercontent.com'
class ForgetPassW extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password:"",
      nav: true,
      login_nav:false,
      contact:false,
      about:false,
      forget:false
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
overhandler (val)  { 
  this.setState({ email: val.target.value }) 
}

forgrt_password() {
    axios.post(`http://localhost:8000/forgetten_password`, this.state)
        .then(res => this.response_forget_password(res.data))
    }
response_forget_password(data) {
        this.state.forget=true
        this.state.password=data.res
        this.setState({...this.state})
        alert(data.res)
    }
render() {
    return (
      this.state.about?<AboutUS/>:
      this.state.contact?<ContactUs/>:
      this.state.login_nav?<Login/>:
      this.state.forget?<Login email={this.state.email} password={this.state.password}/>:
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
          <div className="baseforget">
            <form className="forgetform">
              <img className="forgetimg" src="..\images\18-removebg-preview.png" alt="user" />
              <h2 className="forgeth2">Forget Password</h2>
              <div className="forget_input_box">
                  <input className="forgetemail" placeholder="" type="text" required
                  value={this.state.email} onChange={(val) => this.overhandler(val)}  />
                  <span>Enter Your Email</span>
              </div>
              <input className="forgetbuttom" type="button" value='send' onClick={() => this.forgrt_password()}/>
            </form>
          </div>
          <Footer/>
      </div>
      :<Confirm />

    )

  }


}

export default ForgetPassW