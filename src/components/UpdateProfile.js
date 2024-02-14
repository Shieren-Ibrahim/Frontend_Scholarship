import React, { Component } from "react";
import axios from 'axios'
import Profile from "./Profile";
import AboutUS from './AboutUS';
import './style/updateProfile.css';
import TopBar from "./topbar/TopBar";
import Footer from "./footer/Footer";
import { Link } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
const link = 'https://oylssou24h-496ff2e9c6d22116-8000-colab.googleusercontent.com'

class UpdateProfile extends Component {

    constructor() {
        super()
        this.state = {
            student: {},
            nav: true,
            scholarships: [],
            contact:false,
            about:false,
            home:false,
            signup_nav:false
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
    home(){
        this.state.home=true
        this.setState({...this.state})
    }
    signup_nav(){
        this.state.signup_nav=true
        this.setState({...this.state})
    }
    back() {
        this.state.newSts=this.state.student
        this.setState({ ...this.state , nav: false })
    }

    update() {
        const student = this.state.student
        axios.post(`http://localhost:8000/UpdateProfile`,
            {
                student_id: student.id,
                firstName: student.firstName,
                lastName: student.lastName,
                password: student.password,
                email: student.email,
                birthdate: student.birthdate,
                country: student.country,
                university: student.university,
                img: student.img,
                phone: student.phone,
                newSts:{}

            })
            .then(res => this.response_update(res.data))
    }
    response_update(data) {
        this.state.student=data.student
        this.setState({...this.state,student:data.student})
        if (data.res == 'ok') {
            alert('the profile has been modified successfully')
            this.setState({ ...this.state, nav: false })
            console.log(this.state)
        }
        else if (data.res == 'error') {
            alert('error')
        }
    }

    changephoto(val){
        
            this.state.student= { ...this.state.student, img: val.target.files[0].name }
            this.state.newSts=this.state.student
            this.setState({...this.state})
           
    }
    changephone(val){
        
        this.state.student= { ...this.state.student, phone: val.target.value }
        this.state.newSts=this.state.student
        this.setState({...this.state})
      
}
    changepassword(val){ 
        this.state.student= { ...this.state.student, password: val.target.value }
        this.state.newSts=this.state.student
        this.setState({...this.state})
  
}
    changeEmail(val){
        this.state.student= { ...this.state.student, email: val.target.value }
        this.state.newSts=this.state.student
        this.setState({...this.state})
  
}
    changeFirst(val){
        this.state.student= { ...this.state.student, firstName: val.target.value }
        this.state.newSts=this.state.student
        this.setState({...this.state})
  
}
    changeCountry(val){
        this.state.student= { ...this.state.student, country: val.target.value }
        this.state.newSts=this.state.student
        this.setState({...this.state})
  
}

    changeUniversity(val){   
        this.state.student= { ...this.state.student, university: val.target.value }
        this.state.newSts=this.state.student
        this.setState({...this.state})
  
}
    changeLast(val){
        this.state.student= { ...this.state.student, lastName: val.target.value }
        this.state.newSts=this.state.student
        this.setState({...this.state})
  
}

    render() {
        this.state.student = this.props.student
        this.state.scholarships = this.props.scholarships
        const PF = "http://localhost:8000/photo/";
        return (
          
            this.state.about?<AboutUS/>:
            this.state.home?<Login/>:
            this.state.signup_nav?<SignUp/>:
            this.state.nav ?
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
                <div className="update_profile_container" >
                    <div className="update_pro">
                        <form className='update_profile_left'>
                            <div className="update_profile_input_box">
                                    <input className="update_profile_input" type="text" placeholder="" 
                                        defaultValue={this.state.student.firstName} autofocus required
                                        onChange={(val) => this.changeFirst(val)} />
                                        <span>First name :</span>
                            </div>
                           
                            <div className="update_profile_input_box">
                                <input className="update_profile_input" type="text"
                                    defaultValue={this.state.student.lastName} autofocus required
                                    onChange={(val) => this.changeLast(val)} />
                                    <span>Last name :</span>
                            </div>
                           
                            <div className="update_profile_input_box">
                                <input className="update_profile_input" type="text" autofocus defaultValue={this.state.student.country} required
                                    onChange={(val) => this.changeCountry(val)} />
                                <span>Country :</span>
                            </div>
                            
                            <div className="update_profile_input_box">
                                <input className="update_profile_input" type="text" autofocus defaultValue={this.state.student.university} required
                                    onChange={ (val) => this.changeUniversity(val)} />
                                    <span>University :</span>
                            </div>
                            
                            <div className="update_profile_input_box">
                                <input className="update_profile_input" type="text" autofocus defaultValue={this.state.student.email} required
                                    onChange={(val) => this.changeEmail(val)} />
                                    <span>Email :</span>
                            </div>
                            
                            <div className="update_profile_input_box">
                                <input className="update_profile_input" type="text" autofocus defaultValue={this.state.student.password} required
                                    onChange={(val) => this.changepassword(val)} />
                                        <span>Password :</span>
                            </div>

                            <div className="update_profile_input_box">
                                <input className="update_profile_input" type="text" autofocus
                                 defaultValue={this.state.student.phone} required
                                    onChange={
                                        (val) => this.changephone(val)} />
                                        <span>Phone :</span>
                            </div>

                            <div className="update_profile_input_box">
                                <input className="update_profile_input" type="file" autofocus required
                                    onChange={(val) => this.changephoto(val)} />
                                
                            </div>

                            <div className="update_por_btn">
                                <input className="update_profile_update" type="bottun" value="Update" onClick={() => this.update()} />
                                <input className="update_profile_back" type="bottun" value="Back"  onClick={() => this.back()} />
                            </div>
                        </form>
                        <img className="update_profile_img" src={PF + this.state.student.img} />
                    </div>
                </div>
                <Footer/>
            </div>
            :
            <Profile scholarships={this.state.scholarships} student={this.state.newSts} />
        )
    }
}
export default UpdateProfile