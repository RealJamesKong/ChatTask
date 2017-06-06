import React from "react";
import {Component} from "react"
import axios from "axios";
import {login} from "../ecapi.js";
import Greeting from "../components/Greeting";
import LoginFormMarkup from "../components/LoginFormMarkup";
import DisplayChats from "../components/DisplayChats"



export default class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            user: {},
            isLoggedIn: false,
            token: "",
            chats: [],
        }
    }



    updateEmail = (e) => this.setState({email: e.target.value});
    updatePassword = (e) => this.setState({password: e.target.value});

    async login() {
        const {email, password} = this.state;
        try {
            const results = await login(email, password);
            const {user} = results;
            localStorage.setItem("Token", results.token);
            this.setState({token: results.token});
            this.setState({user, isLoggedIn: true});
            console.log(user);
        } catch (error) {
            console.error("Authentication didn't work out" + error);
        }
    }



    render() {
        const returnResult = this.state.isLoggedIn
            ?  <div>
                <Greeting name={this.state.user.first_name}/>
                <DisplayChats />
            </div>:
            <LoginFormMarkup
                updateEmail={this.updateEmail}
                updatePassword={this.updatePassword}
                login={this.login.bind(this)}/>;

        return returnResult;
    }
}