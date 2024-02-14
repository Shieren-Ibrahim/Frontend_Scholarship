import React, { Component } from 'react';
import Scholarships from './Scholarships';
import Order from './Order';
import TopBar from './topbar/TopBar';
import Footer from './footer/Footer';
import ContactUs from './ContactUs';
import axios from 'axios'
import AboutUS from './AboutUS';
import { Link } from "react-router-dom";
import Login from './Login';
import SignUp from './SignUp';

class Scholarship extends Component {
    constructor() {
        super()
        this.state = {
            student: {},
            nav: true,
            scholarship: {},
            scholarships: [],
            commite: '',
            contact:false,
            about:false,
            home:false,
            signup_nav:false,
            bb:1
        }
    }
    about(){
        this.state.about=true
        this.setState({...this.state})
    }
    back() {
        this.setState({ ...this.state, nav: false, back: true })
    }
    order() {
        this.setState({ ...this.state, nav: false })
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
    rate(i){
        this.state.bb=2
        axios.post(`http://localhost:8000/set_rating`,
        { schoolar_id:this.props.scholarship.id,
            i:i,student_id:this.props.student.id
        })
        .then(res=>this.response_rate(res.data) )
    }
    response_rate(data){
        if( data.res== 'ok' )
        {   alert("Thank you for your rating ")
        this.state.scholarship=data.scholarship
        this.setState({ ...this.state ,scholarship:data.scholarship})
       
    }
            
       
       
    }
    init(){
        this.state.bb=2
    }
    render() {
        this.state.student = this.props.student
        if (this.state.bb==1){
            this.state.scholarship = this.props.scholarship 
           
        }
        this.state.bb==1&&this.init()
        this.state.scholarships = this.props.scholarships
        
        const PF = "http://localhost:8000/photo/";
        const lightStar = "light2.png";
        const darkStar = "dark2.png";
        return (
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
                            <li className="top_link"onClick={() => this.home()} >HOME</li>
                            <li ><div onClick={() => this.about()}>ABOUT US</div></li>
                            <li ><div onClick={() => this.contact()}>CONTACT</div></li>
                            <li className="topListItem" onClick={() => this.signup_nav()}>LOGOUT</li>               
                        </ul>
                    </div>
            </div>
                <div className='sch_sch' >
                    <div  >
                        <div className='sch'>
                            <div>
                                <img className='sch_img' src={PF + this.state.scholarship.img} />
                                <div className='sch_pre_text' >Please rate this scholarship  :</div>
                                    <div className='sch_stars1'>
                                    {[...Array(5)].map((x, i) =>
                                        <img className='sch_star' src={PF + darkStar} key={i} onClick={() => this.rate(i+1)} />)
                                    }
                                    </div>
                                    <div className='sch_btn'>
                                        <input type="bottun" value="order" className='sch_order' onClick={() => this.order()} />
                                        <input type="bottun" value="Back" className='sch_back' onClick={() => this.back()} />
                                    </div>
                            </div>
                             <div className='sch_info'>
                                <div className='sch_pre_text' >Country : 
                                    <span className='sch_text'>{this.state.scholarship.country}</span>
                                </div>
                                <div className='sch_pre_text' >University: 
                                    <span className='sch_text'>{this.state.scholarship.university}</span> 
                                </div>
                                <div className='sch_pre_text'>Type : 
                                    {this.state.scholarship.type
                                    ?
                                    <span className='sch_text' >internal</span> 
                                    : 
                                    <span className='sch_text'>External</span>
                                    }
                                </div>
                                <div className='sch_pre_text' >Specialization: 
                                    <span className='sch_text'>{this.state.scholarship.specialization}</span> 
                                </div>
                                <div className='sch_pre_text' >Number of desk : 
                                    <span className='sch_text'>{this.state.scholarship.num_of_disks}</span>
                                </div>
                                <div className='sch_pre_text'>Level :
                                        {this.state.scholarship.stage==1
                                        ?
                                        <span className='sch_text'>Bachelor</span>
                                        : this.state.scholarship.stage==2?
                                        <span className='sch_text'>Master</span>
                                        :
                                        <span className='sch_text'>Doctoral</span>
                                        }
                                </div>

                                <div className='sch_pre_text'>Deadline :
                                    <span className='sch_text'>{this.state.scholarship.deadline}</span>
                                </div>
                                <div className='sch_pre_text'>Cost :
                                    <span className='sch_text'> {this.state.scholarship.cost} $</span>
                                </div>

                                <div className='sch_stars'>
                                    {[...Array(this.state.scholarship.rating)].map((x, i) =>
                                        <img className='sch_star' src={PF + lightStar} key={i}  />)
                                    }
                                    {[...Array(5 - this.state.scholarship.rating)].map((x, i) =>
                                        <img className='sch_star' src={PF + darkStar} key={i}  />)
                                    }
                                </div>


                                <div className='sch_pre_text'>Summary :
                                    <span className='sch_text'>{this.state.scholarship.summary}</span>
                                </div>
                                <div className='sch_pre_text' >Details :
                                    <span className='sch_text'>{this.state.scholarship.details}</span>
                                </div>
                                
                             </div>
                             
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
            : 
            this.state.back
            ? 
            <Scholarships student={this.state.student} scholarship={this.state.scholarship} scholarships={this.state.scholarships} /> 
            :
            <Order student={this.state.student} scholarship={this.state.scholarship} scholarships={this.state.scholarships} />
        )
    }
}
export default Scholarship