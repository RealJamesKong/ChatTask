import React from "react";
import chat from "../components/chat"
import {getChats} from "../ecapi.js";


class DisplayChats extends React.Component{
    constructor(){
        super();
        this.state ={
            chats: [],
            isChatLoaded: false,
        }
        this.getChats();
    }
    async getChats(){
        try{
            const results = await getChats();
            const {chats} = results;
            console.log(results)
            this.setState({chats: chats});
            console.log("List of Objects ", this.state.chats);
            this.setState({isChatLoaded: true})

        } catch (error){
            console.log("Get chats didn't work" + error);
        }
    }

    componentDidMount(){
    }

    render(){
        console.log(this.state.isChatLoaded)
        if (this.state.isChatLoaded){
            console.log(this.state.chats)
            return this.state.chats.map((chat) => {
                return (
                    <h1>a</h1>
                )
            })
        }
        else{
            return (<p>Loading Chats</p>)
        }
    }
}



export default DisplayChats;