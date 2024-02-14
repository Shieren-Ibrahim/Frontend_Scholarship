import React, { Component, PureComponent } from "react";
import axios from 'axios'
import Scholarships from "./Scholarships";
import ViewScholarship from "./ViewScholarship";
import UpdateOrder from "./UpdateOrder";
import './style/getOrder.css';
import TopBar from "./topbar/TopBar";
import Footer from "./footer/Footer";
import { Link } from "react-router-dom";
import ContactUs from "./ContactUs";
import AboutUS from './AboutUS';
import Login from "./Login";
import SignUp from "./SignUp";

const link = 'https://oylssou24h-496ff2e9c6d22116-8000-colab.googleusercontent.com'

class GetOrderAndNotification extends PureComponent {

    constructor() {
        super()
        this.state = {
            about:false,
            student: {},
            orders: [],
            order: {},
            nav: true,
            view: false,
            update: false,
            bb: 1,
            order_id:0,
            contact:false,
            sch_nav:false,
            home:false,
            signup_nav:false
        }
    }
    about(){
        this.setState({ ...this.state,nav:false, about:true })
    }
    contact(){
        this.setState({ ...this.state, nav:false,contact:true })
        
    }
    navigator(){
        this.setState({ ...this.state,nav:false, sch_nav:true })
    }
    home(){
        this.setState({ ...this.state,nav:false, home:true })
        
    }
    signup_nav(){
        this.setState({ ...this.state,nav:false, signup_nav:true })
        
    }
    cancel(scholarship) {
        axios.post(`http://localhost:8000/cancel_order`,
            { student_id: this.state.student.id, schoolar_id: scholarship.id })
            .then(res => this.response_cancel(res.data))
    }
    response_cancel(data) {
        if (data.res == 'ok') {
            alert('the order has canceled successfuly')
            this.setState({...this.state,bb:1})  
        }

        else if (data.res == 'error') {
            alert('canceling error')
            this.setState({ ...this.state })
        }
    }
    back() {
        this.setState({ ...this.state, nav: false, back: true })
    }
    getOrders() {
        this.state.bb = 2
        axios.post(`http://localhost:8000/get_orderAndNotification`,
            { student_id: this.state.student.id })
            .then(res => this.response_getorder(res.data))

    }
    
    response_getorder(data) {
        if (data.res == 'ok') {
            this.setState({ ...this.state, orders: data.orders })
        }

        else if (data.res == 'error') {
            alert('error')
            this.setState({ ...this.state, nav: false })
        }
    }
  
    view() {
        this.setState({ ...this.state, nav: false, view: true })
    }
    update(id) {
        this.setState({ ...this.state,order_id:id, nav: false, view: false, update: true })
    }

    render() {
        this.state.student = this.props.student
        this.state.scholarships = this.props.scholarships
        this.state.bb==1 && this.getOrders()
        const PF = "http://localhost:8000/photo/";
        return (
            this.state.about?<AboutUS/>:
            this.state.home?<Login/>:
            this.state.signup_nav?<SignUp/>:
            this.state.sch_nav?<Scholarships student={this.state.student} scholarships={this.state.scholarships}/>:
            this.state.contact?<ContactUs/>:
            this.state.nav
            ?
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
                        <li className="topListItem" onClick={() => this.signup_nav()}>LOGOUT</li>               
                    </ul>
                </div>
                </div>
                    <div className="getorder_home">
                        <div className="getorder_container">
                            {this.state.orders.map((order,index)=>{
                            {this.state.order=order}
                            return(
                                <div className="ord_hover">
                                    <div key={order.id}  className="orders">
                                        <img  className="order_img" src={PF+order.scholarship.img}/>
                                        
                                        <div className="order_info">
                                            <div className='getorder_pre_text'>Country : 
                                                <span className='getorder_text' >{order.scholarship.country}</span> 
                                            </div>
                                            <div className='getorder_pre_text'>University :
                                                <span className='getorder_text'>{order.scholarship.university}</span>
                                            </div>
                                        </div> 

                                        <div className="order_info">
                                            <div className='getorder_pre_text'>Type : 
                                                {order.scholarship.type
                                                ?
                                                <span className='getorder_text' >internal</span> 
                                                : 
                                                <span className='getorder_text'>External</span>
                                                }
                                            </div>
                                            <div className='getorder_pre_text'>Level :
                                                    {order.scholarship.stage==1
                                                    ?
                                                    <span className='getorder_text'>Bachelor</span>
                                                    : order.scholarship.stage==2?
                                                    <span className='getorder_text'>Master</span>
                                                    :
                                                    <span className='getorder_text'>Doctoral</span>
                                                    }
                                            </div>
                                            <div className='getorder_pre_text'>State :
                                                    {order.state==0
                                                    ?
                                                    <span className='getorder_text'>Accept</span>
                                                    : order.state==1?
                                                    <span className='getorder_text'>Reject</span>
                                                    :
                                                    <span className='getorder_text'>Under consideration</span>
                                                    }
                                            </div>
                                        </div> 
                                        <div className="order_buttoms" >
                                            <input className="order_but" type="submit" value="View"  onClick={()=> this.view()}/>
                                            <input className="order_but" type="submit" value="Cancel" onClick={()=> this.cancel(order.scholarship)}/>
                                            <input className="order_but" type="submit" value="Update"  onClick={()=> this.update(order.id)}/>
                                        </div>
                                        <br/>
                                    </div> 
                                </div>
                            )
                            })}
                        </div>
                    </div>
                <Footer/>
            </div >
            : 
            this.state.view 
            ?
            <ViewScholarship order={this.state.order} student={this.state.student} scholarships={this.state.scholarships} />
            :
            this.state.update 
            ?
            this.state.back 
            ?
            <Scholarships student={this.state.student} scholarships={this.state.scholarships} />
            : 
            <UpdateOrder scholarships={this.state.scholarships} scholarship={this.state.order.scholarship} bb={1} student={this.state.student} /> 
            :
            <Scholarships student={this.state.student} scholarships={this.state.scholarships} />
             )
    }
}

export default GetOrderAndNotification