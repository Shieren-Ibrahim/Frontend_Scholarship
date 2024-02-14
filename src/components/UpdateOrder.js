import React, { Component, PureComponent } from "react";
import axios from 'axios'
import GetOrderAndNotification from "./GetOrderAndNotification";
import './style/getOrder.css';
import TopBar from "./topbar/TopBar";
import Footer from "./footer/Footer";

import AboutUS from './AboutUS';
import { Link } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import ContactUs from "./ContactUs";
const link = 'https://oylssou24h-496ff2e9c6d22116-8000-colab.googleusercontent.com'

class UpdateOrder extends PureComponent {

    constructor() {
        super()
        console.log(this.props)
        this.state = {
            about:false,
            student: {},
            order: {},
            scholarship: {},
            bb: 1,
            orders: [],
            scholarships: [],
            contact:false,
            home:false,
            signup_nav:false,
            get_order_nav:false
            
        }
    }

    update() {
        const order = this.state.order
        axios.post(`http://localhost:8000/UpdateOrder`,
            {
                order_id: order.id, degree: order.degree,
                identification: order.identification, passport: order.passport,
                money_transaction_num: order.money_transaction_num
            })
            .then(res => this.response_update(res.data))
    }
    response_update(data) {
        if (data.res == 'ok') {
            alert('the order has been modified successfully')
            this.setState({ ...this.state, get_order_nav: true })
        }
        else if (data.res == 'error') {
            alert('error')
        }
    }

    getOrder(student, scholarship) {
        this.state.bb = 2
        axios.post(`http://localhost:8000/getOrder`,
            { student_id: student.id, schoolar_id: scholarship.id })
            .then(res => this.response_getorder(res.data))
    }
    response_getorder(data) {
        if (data.res == 'ok') {
            this.setState({ ...this.state, order: data.order })
        }
        else if (data.res == 'error') {
            alert('error')
        }
    }
    back() {
        this.setState({ ...this.state, get_order_nav:true })
    }
    contact(){
        this.setState({ ...this.state, contact:true })
    }
    about(){
        this.setState({ ...this.state, about:true })
    }
    home(){
        this.setState({ ...this.state, home:true })
       
    }
    signup_nav(){
        this.setState({ ...this.state, signup_nav:true })
    }
    render() {
        this.state.student = this.props.student
        this.state.scholarship = this.props.scholarship
        this.state.scholarships = this.props.scholarships

        this.state.bb == 1 && this.getOrder(this.state.student, this.state.scholarship)
        const PF = "http://localhost:8000/photo/";
        
        return (
            this.state.about?<AboutUS/>:
            this.state.home?<Login/>:
            this.state.signup_nav?<SignUp/>:
            this.state.contact?<ContactUs/>:
            this.state.get_order_nav?<GetOrderAndNotification student={this.state.student} scholarships={this.state.scholarships} /> :
            
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
                <div className="updateorder_">
                    <form className="updateorder_form">
                        <div >
                            <div className="order_pre_text2">Update your dgree :</div>
                            <input className="updateorder_input" placeholder="Update your dgree :" type="file"
                                defaultValue={this.state.order.degree} required
                                onChange={val => {
                                    this.state.order.degree = val.target.files[0].name
                                    this.setState({...this.state})}} />

                            <div className="order_pre_text2">Update your identification :</div>
                            <input className="updateorder_input"
                                type="file" placeholder="Update your identification : " 
                                defaultValue={this.state.order.identification} required
                                onChange={val => {
                                    this.state.order.identification = val.target.files[0].name
                                    this.setState({...this.state})}} />

                            <div className="order_pre_text2">Update your passport :</div>
                            <input className="updateorder_input"
                                type="file" placeholder="Update your passport :"
                                 defaultValue={this.state.order.passport} required
                                onChange={val => {
                                    this.state.order.passport = val.target.files[0].name
                                    this.setState({...this.state})}} />

                            <div className="order_input_box2">
                                <input className="updateorder_input"
                                type="text" placeholder="" 
                                defaultValue={this.state.order.money_transaction_num} required
                                onChange={val => {
                                    this.state.order.money_transaction_num = val.target.value
                                    this.setState({...this.state})}} />
                                <span>Update number transaction number :</span>
                            </div>
                            
                            
                            <div className="updateorder_btn">
                                <input className="updateorder_update" type="button" value="Update" onClick={() => this.update()} />
                                <input className="updateorder_back" type="button" value="Back" onClick={() => this.back()} />
                            </div>
                        </div>
                    </form>
                    </div>
                    <Footer/>
            </div>
            
        )
    }
}
export default UpdateOrder