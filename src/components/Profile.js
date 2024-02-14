import React,{Component} from "react";
import Scholarships from "./Scholarships";
import UpdateProfile from "./UpdateProfile";
 import './style/profile.css';
import TopBar from "./topbar/TopBar";
import Footer from "./footer/Footer";
import ContactUs from "./ContactUs";
import { Link } from "react-router-dom";
import AboutUS from './AboutUS';
import Login from "./Login";
import SignUp from "./SignUp";
const link='https://oylssou24h-496ff2e9c6d22116-8000-colab.googleusercontent.com'


class Profile extends Component{

    constructor(){
        super()
        this.state={
            student:{},
            bb:true,
            nav:true,
            update:false,
            scholarships:[],
            contact:false,
            about:false,
            home:false,
            signup_nav:false
      }
    }
    back(){     
        this.setState({...this.state,nav:false,back:true})
    }
    about(){
    this.state.about=true
    this.setState({...this.state})
    }
    update(){
        this.setState({...this.state,nav:false,update:true})
    }
    contact(){
        this.state.contact=true
        this.setState({...this.state})
    }
    home(){
        this.state.home=true
        this.setState({...this.state})
    }
    signup_nav(){
        this.state.signup_nav=true
        this.setState({...this.state})
    }
    render(){
        this.state.student=this.props.student
        this.state.scholarships=this.props.scholarships
        const PF="http://localhost:8000/photo/";
        return(
            this.state.home?<Login/>:
            this.state.signup_nav?<SignUp/>:
            this.state.about?<AboutUS/>:
            this.state.contact?<ContactUs/>:
            this.state.nav?
            <div>
                <div className="top">
                    <div className="topLeft">
                        <div className="arrow_back" >
                            <i className=" fa fa-arrow-left" aria-hidden="true" onClick={() => this.back()}></i>
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
                <div className="profile_container">
                    <div className="pro">
                            <form className="profile_left">
                            
                                <div className='profile_pre_text' >First Name:
                                    <span className='profilr_text'>{this.state.student.firstName}</span> 
                                </div>
                                <div className='profile_pre_text' >Last Name : 
                                    <span className='profilr_text'> {this.state.student.lastName}</span>
                                </div>
                                <div className='profile_pre_text' >Birthdate :
                                    <span className='profilr_text'>{this.state.student.birthdate}</span>
                                </div>
                                <div className='profile_pre_text'>Country :
                                    <span className='profilr_text'> {this.state.student.country}</span>
                                </div>
                                <div className='profile_pre_text'>University :
                                    <span className='profilr_text'>{this.state.student.university}</span>
                                </div>
                                <div className='profile_pre_text'>Phone :
                                    <span className='profilr_text'>{this.state.student.phone}</span>
                                </div>
                                <div className='profile_pre_text'>Email :
                                    <span className='profilr_text'>   {this.state.student.email}</span>
                                </div>
                                <div className='profile_pre_text'>Password :
                                    <span className='profilr_text'>   {this.state.student.password}</span>
                                </div>
                                <div className='profile_pre_text'>Image :
                                    <span className='profilr_text'>   {this.state.student.img}</span>
                                </div>
                                
                                <div className="profile_btn">
                                    <input className="profile_update" type="button" value="Update" onClick={()=> this.update()}/>
                                    <input className="profile_back" type="button" value="Back"  onClick={()=> this.back()}/>
                                </div>
                            </form>
                            
                            <img className="profile_img" src={PF+this.state.student.img} />
                    </div>
                </div>
                <Footer/>
            </div>
            :
            this.state.update
            ?
            <UpdateProfile student={this.state.student} scholarships={this.state.scholarships}/>
            :
            this.state.back
            ?
            <Scholarships student={this.state.student}  scholarships={this.state.scholarships}/>
            :
            <Scholarships student={this.state.student} scholarships={this.state.scholarships}/>
             )    
    }
}
export default Profile