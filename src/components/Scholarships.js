import React, { Component, PureComponent } from "react";
import axios from 'axios'
import Scholarship from "./Scholarship";
import GetOrderAndNotification from "./GetOrderAndNotification";
import Profile from "./Profile";
import './style/scholarships.css';
import TopBar from "./topbar/TopBar";
import Footer from './footer/Footer';
import Login from "./Login";
import ContactUs from "./ContactUs";

import { Link } from "react-router-dom";
import AboutUS from './AboutUS';
import SignUp from "./SignUp";
import University from "./University";
const link = 'https://oylssou24h-496ff2e9c6d22116-8000-colab.googleusercontent.com'

class Scholarships extends Component {

    constructor() {
        super()
        this.state = {
            about:false,
            scholarships: [],
            nav: true,
            myorder: false,
            profile: false,
            filters: {},
            student: {},
            scholarships: [],
            scholarship: {},
            filterScolar: [],
            bb: 0,
            login_nav:false,
            contact:false,
            signup_nav:false,
            university:false,
            filter_spec:'',
            filter_country:'',
            filter_univ:'',
            filter_free:'',
            filter_stage:'',
        }
    }

    get_detailes(scholarship) {
        this.setState({ ...this.state, nav: false, scholarship: scholarship })
    }
    myorder() {
        this.setState({ ...this.state, nav: false, myorder: true })
    }
    profile() {
        this.setState({ ...this.state, nav: false, profile: true })
    }
    university() {
        this.setState({ ...this.state, nav: false, university: true })
    }
    init() {
        this.state.bb = 1
    }
    specialization (val) {
        if(val.target.value=='All')
        {
            axios.post(`http://localhost:8000/get_sholarships`,{spec:val.target.value})
            .then(res => {
                this.state.scholarships = res.data.scholarships
                // this.state.filter_spec=val.target.value
                // this.state.filter_country='All'
                // this.state.filter_free='All'
                // this.state.filter_stage='All'
                // this.state.filter_univ='All'

                this.setState({...this.state})
            }).catch(res => {console.log(res)})
            
        }
        else{
            axios.post(`http://localhost:8000/get_specialization`,{spec:val.target.value})
            .then(res => {
                this.state.scholarships = res.data.scholarships
                // this.state.filter_spec=val.target.value
                // this.state.filter_country='All'
                // this.state.filter_free='All'
                // this.state.filter_stage='All'
                // this.state.filter_univ='All'
                this.setState({...this.state})
            }).catch(res => {console.log(res)})
        }
    };
    stage(val) {
        if(val.target.value=='All')
        {
            axios.post(`http://localhost:8000/get_sholarships`,{spec:val.target.value})
            .then(res => {
                this.state.scholarships = res.data.scholarships
                // this.state.filter_stage=val.target.value
                // this.state.filter_country='All'
                // this.state.filter_free='All'
                // this.state.filter_spec='All'
                // this.state.filter_univ='All'
                this.setState({...this.state})
            }).catch(res => {console.log(res)})
            
        }
        else{
            axios.post(`http://localhost:8000/get_stage`,{stage:val.target.value})
            .then(res => {
                this.state.scholarships = res.data.scholarships
                // this.state.filter_stage=val.target.value
                // this.state.filter_country='All'
                // this.state.filter_free='All'
                // this.state.filter_spec='All'
                // this.state.filter_univ='All'
                this.setState({...this.state})
            }
            ).catch(res => {
                console.log(res)
            })
        }
    }
    country(val) {
        if(val.target.value=='All')
        {
            axios.post(`http://localhost:8000/get_sholarships`,{spec:val.target.value})
            .then(res => {
                this.state.scholarships = res.data.scholarships
                // this.state.filter_country=val.target.value
                // this.state.filter_spec='All'
                // this.state.filter_free='All'
                // this.state.filter_stage='All'
                // this.state.filter_univ='All'
                this.setState({...this.state})
            }).catch(res => {console.log(res)}) 
        }
        else{
            
        axios.post(`http://localhost:8000/get_SchlarshipForCountry`,{country:val.target.value})
        .then(res => {
            this.state.scholarships = res.data.scholarships
            // this.state.filter_country=val.target.value
            //     this.state.filter_spec='All'
            //     this.state.filter_free='All'
            //     this.state.filter_stage='All'
            //     this.state.filter_univ='All'
            this.setState({ ...this.state })
        }
        ).catch(res => {
            console.log(res)
        })
        }
    }
    university_filter(val) {
        if(val.target.value=='All')
        {
            axios.post(`http://localhost:8000/get_sholarships`,{spec:val.target.value})
            .then(res => {
                this.state.scholarships = res.data.scholarships
                // this.state.filter_univ=val.target.value
                // this.state.filter_spec='All'
                // this.state.filter_free='All'
                // this.state.filter_stage='All'
                // this.state.filter_country='All'
                // this.setState({...this.state})
            }).catch(res => {console.log(res)}) 
        }
        else{
            
        axios.post(`http://localhost:8000/get_SchlarshipForUniversity`,{university:val.target.value})
        .then(res => {
            this.state.scholarships = res.data.scholarships
            // this.state.filter_univ=val.target.value
            // this.state.filter_spec='All'
            // this.state.filter_free='All'
            // this.state.filter_stage='All'
            // this.state.filter_country='All'
            this.setState({ ...this.state })
        }
        ).catch(res => {
            console.log(res)
        })
        }
    }
    free(val) {
        if(val.target.value=='All')
        {
            axios.post(`http://localhost:8000/get_sholarships`,{spec:val.target.value})
            .then(res => {
                this.state.scholarships = res.data.scholarships
                // this.state.filter_free=val.target.value
                // this.state.filter_spec='All'
                // this.state.filter_univ='All'
                // this.state.filter_stage='All'
                // this.state.filter_country='All'
                this.setState({...this.state})
            }).catch(res => {console.log(res)})
            
        }
        else{
            
        axios.post(`http://localhost:8000/get_free`,{country:val.target.value})
        .then(res => {
            this.state.scholarships = res.data.scholarships
            // this.state.filter_free=val.target.value
            //     this.state.filter_spec='All'
            //     this.state.filter_univ='All'
            //     this.state.filter_stage='All'
            //     this.state.filter_country='All'
            this.setState({ ...this.state })
        }
        ).catch(res => {
            console.log(res)
        })
        }
    }
    login_navigator(){
        this.state.login_nav=true
        this.setState({...this.state})
    }
    navigator(){
        this.state.login_nav=true
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
    signup_nav(){
        this.state.signup_nav=true
        this.setState({...this.state})
    }

    render() {
        if(this.state.bb==0){ 
            this.state.student = this.props.student
            this.state.scholarships = this.props.scholarships
        }
        this.state.bb == 0 && this.init()
        const PF = "http://localhost:8000/photo/";
        const PF2 = "http://localhost:8000/photo/";
        return (
            this.state.signup_nav?<SignUp/>:
            this.state.university?<University student={this.state.student} scholarships={this.state.scholarships}/>:
            this.state.about?<AboutUS/>:
            this.state.contact?<ContactUs/>:
            this.state.login_nav?<Login/>:
            <div>
                {
                this.state.nav ?
                <div>
                    <div className="top">
                        <div className="topLeft">
                            <div className="arrow_back" >
                                <i className=" fa fa-arrow-left" aria-hidden="true" onClick={()=>this.navigator()}></i>
                            </div>
                            <div className="title_"> Shilarships Website</div>
                        </div>
                        <div className="topRight">
                            <ul className="topList">
                                <li className="top_link" onClick={()=>this.navigator()}>HOME</li>
                                <li ><div onClick={() => this.about()}>ABOUT US</div></li>
                                <li ><div onClick={() => this.contact()}>CONTACT</div></li>
                                <li className="topListItem" onClick={() => this.signup_nav()}>LOGOUT</li>               
                            </ul>
                        </div>
                    </div>
                    
                    <div className="schs_ss">
                        <div className="schs_section" >
                            <div className="schs_section_Item">
                                <span className="schs_section_Title">Filtering</span>
                                <div className="schs_section_details">here you can choose what shilarships you want to see,
                                    according to thier filtering by specialization ,
                                    academic level or country
                                </div>
                                <ul className="schs_section_list">
                                    <li className="schs_section_listItem">specialization
                                        <select className="schs_section_select" name="specialization" value={this.state.filter_spec} 
                                            onChange={val => this.specialization(val)} >
                                            <option disabled></option>
                                            <option className="pp">All</option>
                                            <option>it</option>
                                            <option >Software</option>
                                            <option>Networks</option>
                                        </select>
                                    </li>
                                    <li className="schs_section_listItem">Level
                                        <select className="schs_section_select"  name="stage" value={this.state.filter_stage}
                                            onChange={val => this.stage(val)}>
                                            <option disabled></option>
                                            <option >All</option>
                                            <option value={1} >Bachalor</option>
                                            <option value={2}>Master</option>
                                            <option value={3}>Doctoral</option>
                                    </select>
                                    </li>
                                    <li className="schs_section_listItem">country
                                        <select className="schs_section_select"  name="country" value={this.state.filter_country}
                                             onChange={val => this.country(val)} >
                                            <option disabled></option>
                                            <option >All</option>
                                            <option >Syria</option>
                                            <option >Russia</option>
                                            <option>England</option>
                                            <option>lebanon</option>
                                        </select>
                                    </li>
                                    <li className="schs_section_listItem">University
                                        <select className="schs_section_select"  name="university" value={this.state.filter_univ}
                                             onChange={val => this.university_filter(val)} >
                                            <option disabled></option>
                                            <option >All</option>
                                            <option >albaath</option>
                                            <option >Oxford</option>
                                            <option>Tomsk State University\</option>
                                        </select>
                                    </li>
                                    <li className="schs_section_listItem">free
                                        <select className="schs_section_select" value={this.state.filter_free}  name="all" onChange={val => this.free(val) }>
                                        <option disabled></option>
                                        <option >All</option>
                                        <option >free</option>
                                       
                                        </select>
                                    </li>
                                </ul>
                            </div>

                            <ul className="schs_section_Item2">
                                <li className="schs_section_title2">
                                    <span className="schs_section_title">Universities</span>
                                    <input className="schs_section_link" type="image" value="My Profil" src={PF2+"univ10.jpeg"}
                                        onClick={() => this.university()} />
                                </li>
                                <li className="schs_section_title2">
                                    <span className="schs_section_title">Your Orders</span>
                                    <input className="schs_section_link" type="image" value="My Orders" src='./images/orders4.jfif'
                                        onClick={() => this.myorder()} />
                                </li>
                                <li className="schs_section_title2">
                                    <span className="schs_section_title">Your Profile</span>
                                    <input className="schs_section_link" type="image" value="My Profil" src={PF2+this.state.student.img}
                                        onClick={() => this.profile()} />
                                </li>
                            </ul>
                            <br />
                        </div>

                        <div className="schs_scholarships">
                            {this.state.scholarships.map(scholarship => {
                            return (
                            <div className="schs_scholarship" key={scholarship.id}>
                                <div className="schs_scholarshipImage"><img  src={PF + scholarship.img} /></div>
                                <div className="schs_scholarshipInfo">
                                    <h4 >Country : {scholarship.country}</h4>
                                    <h4>University :{scholarship.university}</h4>
                                    <p > {scholarship.summary}</p>
                                    <input className="schs_more" type="button" value='More'
                                         onClick={() => this.get_detailes(scholarship)} />
                                </div>
                            </div>
                                        )
                                    })
                                    }
                        </div> 
                    </div>
                    <Footer/>
                </div>
                :
                this.state.myorder 
                ?
                <GetOrderAndNotification student={this.state.student} scholarships={this.state.scholarships} /> 
                :
                this.state.profile 
                ?
                <Profile student={this.state.student} scholarships={this.state.scholarships} />
                : 
                <Scholarship student={this.state.student} scholarship={this.state.scholarship} scholarships={this.state.scholarships} />
                }
            </div>
        )
    }
}

export default Scholarships