//import react package.
import React from 'react';

import HomePage from '../Home/HomePage';
//Home component 
class LogInPage extends React.Component {
    constructor(props) {
        super(props);
        //define state
        this.state = { Username: '', Password: '', isLogin: true, isLoggedin: false };
        //bind onClick loging button function..
        this._onClick = this._onClick.bind(this)
    }
    //onClick Loggin button function...! 
    _onClick() {
        //condition to check username & password mached as "admin"
        if (this.state.Username === "admin" && this.state.Password === "admin") {
            //set state login true
            this.setState({ isLogin: false, isLoggedin: true });
        }else{ //alert username or password incorrect
            alert('Invalid username and password')}
    }

//render function 
    render() {
        //Diplay logging Form if isLogin "true"...
        if (this.state.isLogin) {
            return (
                <section style={{ "border-style": "solid", "border-color": "coral", }} className="jumbotron">
                    <b>
                        <section>
                            <article>Enter UserName or Password. </article>
                        </section><br />
                        <section >
                            Username: <input
                                type="text"
                                placeholder=" enter username"
                                value={this.state.Username}
                                style={{ "margin": "px", "border-radius": "10px", "padding": "7px" }}
                                onChange={(e) => { this.setState({ Username: e.target.value }) }}
                            /><br />
                            Password:   <input
                                type="password"
                                placeholder=" enter password"
                                value={this.state.Password}
                                style={{ "margin": "6px", "border-radius": "10px", "padding": "7px" }}
                                onChange={(e) => { this.setState({ Password: e.target.value }) }}
                            /><br />
                            <button className="btn btn-primary" onClick={this._onClick}>LogIn</button>
                        </section>
                    </b>
                </section>
            );
        }//Display Home Screen user isLoggedin
        if(this.state.isLoggedin) {
            return (
                <section>
                        <HomePage {...this.state}/>
                </section>
            );
        }
    } 
}
export default LogInPage;