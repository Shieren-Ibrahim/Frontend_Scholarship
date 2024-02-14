import React,{Component} from "react";
import Scholarships from "./Scholarships";
import UpdateProfile from "./UpdateProfile";
 import './style/university.css';
import TopBar from "./topbar/TopBar";
import Footer from "./footer/Footer";
import ContactUs from "./ContactUs";
import { Link } from "react-router-dom";

import AboutUS from './AboutUS';
import Login from "./Login";
import SignUp from "./SignUp";
import University from "./University";
import Scholarship from "./Scholarship";
import ScholarshipDetailes from "./ScholarshipDetailes";
const link='https://oylssou24h-496ff2e9c6d22116-8000-colab.googleusercontent.com'


class Scholarship_univ extends Component{

    constructor(){
        super()
        this.state={
            student:{},
            bb:true,
            nav:true,
            update:false,
            scholarships:[],
            schs_univ:[],
            contact:false,
            about:false,
            home:false,
            signup_nav:false,
            sch:false
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
    get_detailes(scholarship) {
        this.setState({ ...this.state, sch:true, scholarship: scholarship })
    }
    render(){
        this.state.student=this.props.student
        this.state.scholarships=this.props.scholarships
        this.state.schs_univ=this.props.schs_univ
        const PF="http://localhost:8000/photo/";
        return(
            this.state.home?<Login/>:
            this.state.sch?<ScholarshipDetailes schs_univ={this.state.schs_univ} student={this.state.student} scholarship={this.state.scholarship} scholarships={this.state.scholarships} />:
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
                <div className="univ_schs_scholarships">
                    {this.state.schs_univ.map(scholarship => {
                        return (
                            <div className="univ_schs_scholarship" key={scholarship.id}>
                                <div className="univ_schs_scholarshipImage"><img  src={PF + scholarship.img} /></div>
                                        
                                <div className="univ_schs_scholarshipInfo">
                                    <h4 >Country {scholarship.country}</h4>
                                    <h4 >University {scholarship.university}</h4>
                                    <p > {scholarship.summary}</p>
                                    <input className="univ_schs_more" type="button" value='More'
                                        onClick={() => this.get_detailes(scholarship)} />
                                </div>
                            </div>
                                    )
                                    })
                                    }
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
            <University student={this.state.student}  scholarships={this.state.scholarships}/>
            :
            <University student={this.state.student} scholarships={this.state.scholarships}/>
             )    
    }
}
export default Scholarship_univ