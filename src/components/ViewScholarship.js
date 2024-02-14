import React, { Component } from 'react';
import GetOrderAndNotification from './GetOrderAndNotification';
import TopBar from './topbar/TopBar';
import Footer from './footer/Footer';
import { Link } from "react-router-dom";
import ContactUs from './ContactUs';

import AboutUS from './AboutUS';
import Login from './Login';
import SignUp from './SignUp';
class ViewScholarship extends Component{
    constructor(){
        super()
        this.state={
            about:false,
            student:{},
            nav:true,
            scholarship_id:0,
            scholarships:[],
            order:{},
            contact:false,
            home:false,
            signup_nav:false
      }
    }
    contact(){
        this.state.contact=true
        this.setState({...this.state})
    }
    back(){
         this.setState({...this.state,nav:false})
        }
    about(){
            this.state.about=true
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
        this.state.order=this.props.order
        this.state.scholarships=this.props.scholarships
      
        const PF="http://localhost:8000/photo/";
        const lightStar="light2.png";
        const darkStar="dark2.png";
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
            <div className='main_sch'>
                <div className='viewsch'>
                    <div className='viewscholarship_sc'> 
                        <img className='viewscholarship_img' src={PF+this.state.order.scholarship.img}/>
                        <div className='viewscholarship_info'>
                            <div className='viewscholarship_pre_text' >Country: 
                                    <span className='viewscholarship_text'>{this.state.order.scholarship.country}</span>
                            </div>
                            <div className='viewscholarship_pre_text' >University: 
                                <span className='viewscholarship_text'>{this.state.order.scholarship.university}</span>
                            </div>
                            <div className='viewscholarship_pre_text'>Type : 
                                    {this.state.order.scholarship.type
                                    ?
                                    <span className='viewscholarship_text' >internal</span> 
                                    : 
                                    <span className='viewscholarship_text'>External</span>
                                    }
                            </div>
                            <div className='viewscholarship_pre_text' >Specialization: 
                                <span className='viewscholarship_text'>{this.state.order.scholarship.specialization}</span>
                            </div>
                            <div className='viewscholarship_pre_text' >Number of desk : 
                                <span className='viewscholarship_text'>{this.state.order.scholarship.num_of_disks}</span>
                            </div>
                            <div className='viewscholarship_pre_text'>Level :
                                        {this.state.order.scholarship.stage==1
                                        ?
                                        <span className='viewscholarship_text'>Bachelor</span>
                                        : this.state.order.scholarship.stage==2?
                                        <span className='viewscholarship_text'>Master</span>
                                        :
                                        <span className='viewscholarship_text'>Doctoral</span>
                                        }
                            </div>
                            <div className='viewscholarship_pre_text'>Deadline :
                                <span className='viewscholarship_text'>{this.state.order.scholarship.deadline}</span>
                            </div>
                            <div className='viewscholarship_pre_text'>Cost :
                                <span className='viewscholarship_text'> {this.state.order.scholarship.cost} $</span>
                            </div>

                                { [...Array(this.state.order.scholarship.rating)].map((x,i)=>
                                <img className='viewscholarship_star' src={PF+lightStar} key={i} />)
                                }
                                { [...Array(5-this.state.order.scholarship.rating)].map((x,i)=>
                                    <img className='viewscholarship_star' src={PF+darkStar} key={i} />)
                                }


                            <div className='viewscholarship_pre_text'>Summary :
                                <span className='viewscholarship_text'>{this.state.order.scholarship.summary}</span>
                            </div>
                            <div className='viewscholarship_pre_text' >Details :
                                <span className='viewscholarship_text'>{this.state.order.scholarship.details}</span>
                            </div>
                    </div> 
                    </div> 
                </div>
                <div className='details_order'>
                    <p>Money transaction number:<span>{this.state.order.money_transaction_num}</span></p>
                    <p>The state of order :
                        {this.state.order.state==0?
                        <span >Accept</span>
                        :this.state.order.state==1?
                        <span >Reject</span>
                        :
                        <span >Under consideration</span>
                        }
                    </p>
                    <div className='photo'>
                        <div>
                            <h4>Degree :</h4>
                            <img src={PF+this.state.order.degree}/>
                        </div>
                        <div>
                            <h4>Passport :</h4>
                            <img src={PF+this.state.order.passport}/>
                        </div>
                        <div>
                            <h4>Identification : </h4>
                            <img src={PF+this.state.order.identification}/>
                        </div>
                    </div> 
                </div>
                
                
                <div ><input type="submit" value="Back"    className='viewscholarship_back' onClick={()=> this.back()}/></div>
            </div>
            <Footer/>
        </div>
        :
        <GetOrderAndNotification student={this.state.student} scholarships={this.state.scholarships}/>
    )
}
}
export default ViewScholarship