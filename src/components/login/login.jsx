import React from 'react';
import loginImg from '../../login.jpg';
export class Login extends React.Component {

    render() {
        return (
            <div className="base" ref={this.props.containerRef}>
            <div className="content">
            <div className="displayimg">
            <h1>
            Now Or Never
            </h1>
            <img src={loginImg} alt="description" />
            </div>
            <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="Enter Username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="Enter Password" />
            </div>
            </div> 
            </div>   
            <div className="footer">
            <button type="button" className="btn">
            Login
            </button>
            </div>
            </div>      
        );
    }
}