import React, { Component } from 'react';
import axios from 'axios'
import Scholarships from './Scholarships';
import Scholarship from './Scholarship';
import './style/getOrder.css';
import TopBar from './topbar/TopBar';
import Footer from './footer/Footer';
import AboutUS from './AboutUS';
import { Link } from "react-router-dom";
import ContactUs from './ContactUs';
import Login from './Login';
import SignUp from './SignUp';
class Order extends Component{
    constructor(){
        super()
        this.state={
            student_id:0,
            schoolar_id:0,
            degree:"",
            identification:"",
            passport:"",
            money_transaction_num:"",
            nav:true,
            scholarship:{},
            scholarships:[],
            student:{},
            order:{},
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
    order_(){
        
        axios.post(`http://localhost:8000/submit_request`,
        {...this.state,student_id:this.props.student.id, schoolar_id:this.props.scholarship.id,
            degree:this.state.order.degree,
            identification:this.state.order.identification,
            passport:this.state.order.passport,
            money_transaction_num:this.state.order.money_transaction_num
        })
        .then(res=>this.response_order_(res.data) )
             
         }
    response_order_(data){
            if( data.res== 'exists' )
            {   alert("You already have an order ")
                this.setState(prev=>({ nav:false,student:prev.student}))}
            else if(data.res=='ok')
            {
                alert("Your request has been registered successfully ")
                this.setState(prev=>({ nav:false,student:prev.student}))
            }
            else if(data.res=='error'){
                alert("error ")
            this.setState(prev=>({...this.state}))
            }
        }
    back(){  
            this.setState({...this.state,nav:false,back:true})  
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
        this.state.scholarship=this.props.scholarship
        this.state.scholarships=this.props.scholarships
    return(
        this.state.about?<AboutUS/>:
        this.state.home?<Login/>:
        this.state.signup_nav?<SignUp/>:
        this.state.contact?<ContactUs/>:
        this.state.nav ?
        <div >
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
            <div className='order_'>
                <form className="orderform"> 
                    <div className='order_pre_text'>Upload photo for your dgree :</div>
                    <input className="order_input" placeholder="Update your dgree :"  type="file" required
                        onChange={val =>{
                        this.state.order.degree =val.target.files[0].name
                        this.setState({...this.state})   }}/>

                    <div className='order_pre_text'>Upload photo for your identification :</div>
                    <input className="order_input" placeholder="Update your identification : " type="file" required
                        onChange={val =>{
                        this.state.order.identification = val.target.files[0].name
                        this.setState({...this.state})}}/>

                    <div className='order_pre_text'>Upload photo for your passport :</div>
                    <input  className="order_input" placeholder="Update your passport :" type="file"  required
                        onChange={val =>{
                        this.state.order.passport = val.target.files[0].name
                        this.setState({...this.state})}}/>

                    <div className='order_input_box'>
                        <input type="text" className="order_input " placeholder=''  required
                        onChange={val =>{ 
                            this.state.order.money_transaction_num = val.target.value
                            this.setState({...this.state})}}/>
                        <span>Enter number transaction number :</span>
                    </div>
                    
                     <div className='order_btn'>
                        <input type="bottun" className="order_order" value="order" onClick={()=> this.order_()}/>
                        <input type="bottun" className="order_back" value="Back"   onClick={()=> this.back()}/>
                    </div>
                
            </form>
            </div>
            <Footer/>
        </div>
        :
        this.state.back
        ?
        <Scholarship student={this.state.student}  scholarships={this.state.scholarships} scholarship={this.state.scholarship}/>
        :
        <Scholarships student={this.state.student} scholarships={this.state.scholarships} />
    )
}
}
export default Order