import React,{Component} from "react";
import './style/about.css';
import TopBar from "./topbar/TopBar";
import Footer from './footer/Footer';
import Scholarships from "./Scholarships";
import { Link } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import ContactUs from "./ContactUs";

class AboutUS extends Component{
    constructor() {
        super()
        this.state = {
            home:false,
            contact:false,
            signup_nav:false,
            student:{},
            scholarships:[],
           
        }
    }
        navigator(){
            this.state.home=true
            this.setState({...this.state})
        }
        contact(){
            this.state.contact=true
            this.setState({...this.state})
        }
        signup_nav(){
            this.state.signup_nav=true
            this.setState({...this.state})
        }
        
        render(){
            return( 
                this.state.contact?<ContactUs/>:
                this.state.signup_nav?<SignUp/>:
                this.state.home?<Login />:
                
                <div>
                    {/* <TopBar/> */}
                    <div className="top">
                            <div className="topLeft">
                                <div className="arrow_back" >
                                    <i className=" fa fa-arrow-left" aria-hidden="true" onClick={() => this.navigator()}></i>
                                </div>
                                <div className="title_"> Shilarships Website</div>
                            </div>
                            <div className="topRight">
                                <ul className="topList">
                                    <li className="top_link" onClick={() => this.navigator()} >HOME</li>
                                    <li ><div >ABOUT US</div></li>
                                    <li className="top_link" onClick={() => this.contact()}>CONTACT</li>
                                    <li className="topListItem" onClick={() => this.signup_nav()}>LOGOUT</li>               
                                </ul>
                            </div>
                    </div>

                    <section className="contact11">
                        <div className="content11">
                            <h2>ABOUT US</h2>
                            <p>Hello, everyone! This site makes it easy for you to access the appropriate grants, saves time and avoids getting lost between the different links We hope you like it</p>
                        </div>
                        <div className="container11">
                            <div className="contactInfo11">
                                <div className="box11">
                                    <div ><img src="http://localhost:8000/photo/mohamad.jpg" className="img11"></img></div>
                                </div>
                            </div>
                            <div className="contactForm11">
                                <h2> YOUR SCHOLARSHIPS HERE</h2>
                                <div>We have tried to simplify the process of searching for the grant that suits you and we hope that you like this site and we promise you more additional features in subsequent versions.
                                    <br></br>All love and respect
                                    <br></br>
                                    <i class="fa fa-heart" aria-hidden="true"></i>&emsp; 
                                    <i class="fa fa-heart" aria-hidden="true"></i>&emsp; 
                                    <i class="fa fa-heart" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Footer/>
                </div>
            )
        }

}
export default AboutUS