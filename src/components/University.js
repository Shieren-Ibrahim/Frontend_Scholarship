import React,{Component} from "react";
import Scholarships from "./Scholarships";
import UpdateProfile from "./UpdateProfile";
 import './style/university.css';
import TopBar from "./topbar/TopBar";
import Footer from "./footer/Footer";
import ContactUs from "./ContactUs";
import { Link } from "react-router-dom";
import axios from 'axios'
import AboutUS from './AboutUS';
import Login from "./Login";
import SignUp from "./SignUp";
import Scholarship_univ from "./Scholarship_univ";
const link='https://oylssou24h-496ff2e9c6d22116-8000-colab.googleusercontent.com'


class University extends Component{

    constructor(){
        super()
        this.state={
          university:[],
          univ_schs:false,
            student:{},
            bb:true,
            nav:true,
            update:false,
            scholarships:[],
            contact:false,
            about:false,
            home:false,
            signup_nav:false,
            bb:1,
            schs_univ:[]
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
    get_schs(name){
        axios.post(`http://localhost:8000/get_SchlarshipForUniversity`,{university:name})
        .then(res => {
            this.state.schs_univ = res.data.scholarships
            this.state.univ_schs=true
            this.setState({ ...this.state })
        }
        ).catch(res => {
            console.log(res)
        })
    }
    getUniversity(){
      axios.post(`http://localhost:8000/get_university`, this.state)
      .then(res => this.response_getUnvirsity(res.data))
    }
    response_getUnvirsity(data) {
      this.state.bb=2
      if (data.res == 'ok') {
        console.log(data.university)
          this.setState(prev => ({ ...this.state, nav2: false,  university: data.university }))
      }
      else if (data.res == 'error') {
          alert('error')
          this.setState(prev => ({ ...this.state }))
      }
  }
 
    render(){
        this.state.student=this.props.student
        this.state.scholarships=this.props.scholarships
        const PF="http://localhost:8000/photo/";
        this.state.bb==1&&this.getUniversity()
        return(
            this.state.home?<Login/>:
            this.state.signup_nav?<SignUp/>:
            this.state.about?<AboutUS/>:
            this.state.contact?<ContactUs/>:
            this.state.univ_schs?<Scholarship_univ student={this.state.student} scholarships={this.state.scholarships} 
            schs_univ={this.state.schs_univ}/>:
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
                <div className="university_univs">
                    {this.state.university.map(univ => {
                    return (
                        <div className="university_univ" key={univ.id}>
                            <div className="university_univImage"><img  src={PF + univ.logo} /></div>
                            <div className="university_univInfo">
                                <h4 >{univ.name}</h4> 
                                <p >Link : <a href={univ.url}>{univ.url}</a></p>
                                <p>Country : {univ.country.name}</p>
                                <input className="university_btn" type="button" value='Get Scholarships'
                                    onClick={() => this.get_schs(univ.name)} />
                            </div>
                        </div>
                        )})}
                           
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
export default University