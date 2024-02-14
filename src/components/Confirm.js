import React, { Component } from 'react';
import axios from 'axios'
import Login from './Login';
import Scholarships from './Scholarships';
import './style/confirm.css';
import NextConfirm from './NextConfirm';
import SignUp from './SignUp';
import TopBar from './topbar/TopBar';
import Footer from './footer/Footer';
import { Link } from "react-router-dom";
import ContactUs from './ContactUs';
import AboutUS from './AboutUS';

class Confirm extends Component {
    constructor() {
        super()
        this.state = {
            signup_nav:false,
            nav: true,
            email:'',
            nav2: true,
            next:false,
            contact:false,
            about:false,
            home:false,
            firstName: '',
            lastName: '',
            birthdate: '',
            img: '',
            country: '',
            university: '',
            
        }
    }
    overhandler2() {
        this.setState({...this.state,next:true})
    }
    navigator(){
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
    change_photo(val){
        this.state.img=val.target.files[0].name
        this.setState({ ...this.state }) 
    }
   
    render() {
        this.state.email=this.props.email
        return (
            this.state.home?<Login/>:
            this.state.about?<AboutUS/>:
            this.state.contact?<ContactUs/>:
            !this.state.nav2 ?<Scholarships scholarships={this.state.scholarships} student={this.state.student} />:
            !this.state.nav ?<Login />:
            this.state.next?<NextConfirm state={this.state}/>:
            this.state.signup_nav?<SignUp/>:
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
                            <li className="topListItem" onClick={() => this.navigator()}>LOGOUT</li>               
                        </ul>
                    </div>
                </div>
                       
                <div className='confirm'>
                    <form  className='confirmform'>
                        <img className='confirmimg' src="..\images\18-removebg-preview.png" alt="user" />
                        <div className='confirm_input_box'> 
                            <input className='signup_input' value={this.state.firstName}  placeholder='' type="text"
                            required
                            onChange={val => { this.setState({ ...this.state, firstName: val.target.value }) }} />
                            <span>First Name </span>
                        </div>
                        
                        <div className='confirm_input_box'>
                            <input className='signup_input' value={this.state.lastName} placeholder=''
                             type="text" required
                            onChange={val => { this.setState({ ...this.state, lastName: val.target.value }) }} />
                            <span>Last Name</span>
                        </div>
                        
                        <div className='confirm_input_box'>
                            <input className='signup_input' value={this.state.birthdate}
                            type='date' required id='datep'
                            onChange={val => { this.setState({ ...this.state, birthdate: val.target.value }) }} />
                        </div>

                        <div className='confirm_input_box'>
                            <input className='signup_input' value={this.state.country} placeholder='' type='text' required
                            onChange={val => { this.setState({ ...this.state, country: val.target.value }) }} />
                            <span>Country</span>
                        </div>
                         
                        <div className='confirm_input_box'>
                            <input className='signup_input' value={this.state.university} placeholder='' type='text' required
                            onChange={val => { this.setState({ ...this.state, university: val.target.value }) }} />
                            <span>University</span>
                        </div>
                        
                        <div className='confirm_input_box'>
                            <input  className="signup_input" placeholder="Upload your photo:" type="file"  required
                            onChange={val =>this.change_photo(val)}/>
                        </div>
                        
                        <input className='confirmnext' type="button" value='Next' onClick={() => this.overhandler2()} />
                     
                    </form>
                    </div>
                    <Footer/>
                    </div>
        );
    }
}
export default Confirm