import React, { Component } from "react";
import { Link } from "react-router-dom";
import './topbar.css';
const link = 'https://oylssou24h-496ff2e9c6d22116-8000-colab.googleusercontent.com'
class TopBar extends Component {
  constructor() {
    super()
    this.state = {
      nm:1
    }
  }
  nmm(){
    this.state.nm=2
    this.setState({...this.state})
  }
  render() {
    const PF = "http://localhost:8000/Scholarships/";
    this.state.p=this.props.p
    this.state.nm==1&&this.nmm()
    console.log('njnj')
    console.log(this.state)
    return (
      <div className="top">
        <div className="topLeft">
        <Link to={{pathname:"/AllPath",state:this.state.p}}   style={{ textDecoration:'none',color:'white' }}>
        <div className="arrow_back" >
                    <i className=" fa fa-arrow-left" aria-hidden="true"></i></div>
        </Link>
        
          <div className="title_"> Shilarships Website</div>
        </div>
        <div className="topRight">
          <ul className="topList">
            {/* <li className="top_link">HOME</li> */}
            <li className="top_link">ABOUT US</li>
            <li ><Link className="top_link" to="/contactUS">CONTACT</Link></li>
            <li className="topListItem"><Link className="top_link" to="/SignUp">LOGOUT</Link></li>               
          </ul>
        </div>
      </div>
    )

  }


}

export default TopBar