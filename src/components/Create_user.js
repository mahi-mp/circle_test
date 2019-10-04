import React from "react";

export default class Create_user extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            name:"",
            phone:""
        }
    }

    handle1=(e)=>{
        this.setState({
            name:e.target.value
        })
    }

    handle2=(e)=>{
        this.setState({
            phone:e.target.value
        })
    }

    submit_user=()=>{
        const axios = require('axios'); 
        const requestParam = {
        method: 'post',
            url:"http://localhost:5000/addUser",
            data:{
                "name":this.state.name,
                "phone":this.state.phone
            }
        }
        axios(requestParam)
        .then(response=>console.log(response))
        .catch(err=>alert("user already exist"));        
    }

    render()
    {        
        const align_verticle={
            position:"relative",
            top:200
        }
        const a_style={
            width: 18+"rem"
        }
        return(
            <React.Fragment>
                <div className="container d-flex justify-content-center" style={align_verticle}>
                    <div className="card shadow-lg p-3 mb-5 bg-white rounded" style={a_style}>
                        <div className="row form-group d-flex justify-content-center m-3 ">
                            <input className="m-2" type="text" value={this.state.name} onChange={this.handle1} placeholder="Enter Name" />
                            <input className="m-2" type="text" value={this.state.phone} onChange={this.handle2}  placeholder="Phone" />
                            <button className="btn btn-outline-success m-2" onClick={this.submit_user}>Submit</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}