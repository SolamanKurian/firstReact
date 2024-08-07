//class component
import React from "react"
import { Component } from "react";
import axios from "axios";
class UserClass extends React.Component{// when the class component calls, 1st constructor will work, 2nd render will work 3rd componentDidmount will work,


    constructor(props){
        super(props);

        this.state={ // it ca use for all state variables
            count1:0,
            count2:1,
            userinfo:{
                name:"Dummy",
                location:"dummy"
            }
        };
    }
async componentDidMount(){// this is to make API calls,
    let response= await axios.get("https://api.github.com/users/Asha")  
    console.log(response.data);
    this.setState({
        userinfo:response.data
    })
}

    render(){
        let {name,id}=this.state.userinfo
        let {count1}= this.state;
        let {count2}= this.state;
    console.log(name,id);
        return ( <div className="user-card">
            <h1>Count:{count1}</h1>
            <button onClick={()=>{
                // never update state variable directly
                this.setState({//it can use for all state variables
                    count1:this.state.count1+1,
                })
            }}>+</button>
            <h1>Count:{count2}</h1>
            
            <h2>name:{name}</h2>
            <h3>Location: {id}</h3>
            <h3>Contact:9605724711</h3>
        </div>)
    }
}
export default UserClass