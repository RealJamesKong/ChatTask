import React from "react";
import {Component} from "react";
import Greeting from '../components/Greeting'
import Name from '../components/Name'

export default class Counter extends Component{
    constructor(){
        super()
        this.state={
            count:0,
            name:""
        };
    }
    updateName = (event)=> {
        const name = event.target.value;
        this.setState({name});
    }

    updateCount = ()=> this.setState({count:this.state.count+1});
    render() {
        return <div>
            <span>{this.state.count}</span>
            <Greeting name={this.state.name}/>
            <p>
            <button onClick={this.updateCount}>GO</button>
            </p>
            <Name updateName={this.updateName}/>

        </div>;
    }
}