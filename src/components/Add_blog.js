import React from "react";
export default class Add_blog extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            head:"",
            text:""
        }
    }

    handle1=(e)=>{
        this.setState({
            head:e.target.value
        })
    }

    handle2=(e)=>{
        this.setState({
            text:e.target.value
        })
    }

    create_blog=()=>
    {
        console.log("hi")
        const axios = require('axios'); 
        const requestParam = {
        method: 'post',
            url:`http://localhost:5000/add_blog/${this.props.location.state.id}`,
            data:{
                "text":this.state.text,
                "head":this.state.head
            }
        }
        axios(requestParam)
        .then(response=>console.log(response))
        .catch(err=>alert("user already exist"));                 
    }    

    componentDidMount()
    {        
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
        console.log(this.props)
        return(           
            <React.Fragment>  
                <div className="row">
                    <div className="container d-flex justify-content-center" style={align_verticle}>
                        <div className="card shadow-lg p-3 mb-5 bg-white rounded" style={a_style}>
                            <div className="row form-group d-flex justify-content-center m-3 ">
                                <input className="m-2" type="text" value={this.state.head} onChange={this.handle1} placeholder="Heading" />
                                <input className="m-2" type="text" value={this.state.text} onChange={this.handle2}  placeholder="Blog" />
                                <button className="btn btn-outline-success m-2" onClick={this.create_blog}>Submit</button>
                            </div>
                        </div>
                    </div> 
                </div>
            </React.Fragment>
        );
    }
}