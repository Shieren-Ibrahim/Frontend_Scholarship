import React, { Component } from 'react';
import axios from 'axios'
import Login from './Login';
import Scholarships from './Scholarships';
import { Link } from "react-router-dom";
import './style/confirm.css';
import TopBar from './topbar/TopBar';
import Footer from './footer/Footer';
import Confirm from './Confirm';
import ContactUs from './ContactUs';
import AboutUS from './AboutUS';
import SignUp from './SignUp';

class NextConfirm extends Component {
    constructor() {
        super()
        this.state = {
            code: 0,
            email: "",
            nav: true,
            nav2: true,
            firstName: '',
            lastName: '',
            birthdate: '',
            scholarships: [],
            student: {},
            img: '',
            country: '',
            university: '',
            phone: '',
            password: '',
            next:false,
            count:1,
            confirm_nav:false,
            contact:false,
            about:false,
            home:false,
            signup_nav:false
        }
    }
    confirm() {
        axios.post(`http://localhost:8000/confirm`, this.state)
            .then(res => this.response_confirm(res.data))
        
    }
    response_confirm(data) {
        if (data.res == 'error_code' || data.res == 'error') {
            alert(data.res)
            this.setState({})
        }
        else if (data.res == 'exists email') {
            alert("exists email");
            this.setState({ nav: false })
        }
        else if (data.res == 'ok') {
            alert("Successfullly");
            this.setState({ ...this.state, student: data.student, scholarships: data.scholarships, nav2: false })
        }

    }
   
    phone(val) {
        
        this.state.phone=val.target.value 
        this.setState({ ...this.state})

    }
    email(val) {
        this.state.email=val.target.value 
        this.setState({ ...this.state})
    }
    navigator(){
        this.state.confirm_nav=true
        this.setState({...this.state})
    }
    signup_nav(){
        this.state.signup_nav=true
        this.setState({...this.state})
    }
    contact(){
        this.state.contact=true
        this.setState({...this.state})
    }
    about(){
        this.state.about=true
        this.setState({...this.state})
    }
    home(){
        this.state.home=true
        this.setState({...this.state})
    }
    render() {
        if (this.state.count==1) {
            this.state={...this.props.state,count:2}
        }
        return (
            this.state.signup_nav?<SignUp/>:
            this.state.home?<Login/>:
            this.state.about?<AboutUS/>:
            this.state.contact?<ContactUs/>:
            this.state.confirm_nav?<Confirm firstName={this.state.firstName} lastName={this.state.lastName}
            country={this.state.country} university={this.state.university} birthdate={this.state.birthdate} 
            img={this.state.img} />:
            !this.state.nav2 ?<Scholarships scholarships={this.state.scholarships} student={this.state.student} />:
            !this.state.nav ?<Login />:
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
                            <li className="top_link" onClick={() => this.home()}>HOME</li>
                            <li ><div onClick={() => this.about()}>ABOUT US</div></li>
                            <li ><div onClick={() => this.contact()}>CONTACT</div></li>
                            <li className="topListItem" onClick={() => this.signup_nav()}>LOGOUT</li>               
                        </ul>
                    </div>
                </div>
                <div className='confirm'> 
                    <form className='confirmform'>
                        <img className='confirmimg' src="..\images\18-removebg-preview.png" alt="user" />
                        <div className='confirm_input_box' id='confirm_phone'>
                            <input className='signup_input'  placeholder="" type="text"  required
                            onChange={val => { this.setState({ ...this.state, phone: val.target.value }) }}/>
                            <span>Phone</span>
                        </div>
                        {/* <div className='confirm_input_box'>
                            <input className='signup_input' placeholder='' type="text"  required
                            onChange={val => { this.setState({ ...this.state, email: val.target.value }) }} />
                            <span>Enter your Email</span>
                        </div> */}
                        <div className='confirm_input_box'>
                            <input className='signup_input' placeholder='' type="text" required
                            onChange={val => { this.setState({ ...this.state, code: val.target.value }) }} />
                            <span>Enter code that was sent to your email</span>
                        </div>
                        <div className='confirm_input_box'>
                            <input className='signup_input' placeholder='' type='password' required
                            onChange={val => { this.setState({ ...this.state, password: val.target.value }) }} />
                            <span>PassWord</span>
                        </div>

                        <input className='confirmnext1' type="button" value='Submit' onClick={() => this.confirm()} />
                
                    </form>
                    </div>
                    <Footer/>
            </div>
        );
    }
}
export default NextConfirm