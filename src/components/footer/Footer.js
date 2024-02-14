import React, { Component } from "react";
import './footer.css';
class Footer extends Component {
  render() {
    return (
      <div className="footer">
          <p >copyright @2024</p>
          <div className="social">
              <a href="https://fontawesome.com/v4/icons/"><i className="topIcon fab fa-facebook-square" ></i> </a>
              <i className="topIcon fab fa-instagram-square"></i>
              <i className="topIcon fab fa-pinterest-square"></i>
              <i className="topIcon fab fa-twitter-square"></i>
          </div>
      </div>
    )
  }
}

export default Footer