import React from "react";
import Add_blog from "./Add_blog";
import {Link,Route} from "react-router-dom";
import Blog_details from "./Blog_details";
export default class Display_user extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            alldata:[],
            allblog:[],
            blogcomments:[],
            hide:false,
            comment_toggle:false
        }
    }

    
    create_blog=()=>
    {
        this.setState({
            hide:true
        })                         
    }  

    comment_toggle=()=>
    {
        this.setState({
            comment_toggle:true
        })
    }
    componentDidMount()
    {
        const axios = require('axios');
        axios.get('http://localhost:5000/show')
            .then(response =>{
                this.setState({
                    alldata:response.data
                })
            } )
            .catch(err => console.log(err));

        axios.get('http://localhost:5000/showblog')
        .then(response =>{
            this.setState({
                allblog:response.data
            })
        } )
        .catch(err => console.log(err));

        axios.get('http://localhost:5000/blogcomments')
        .then(response =>{
            this.setState({
                blogcomments:response.data
            })
        } )
        .catch(err => console.log(err));
    }  

    submit_comment=()=>
    {
        alert("commented")
    }
    render()
    {    
        console.log('props in disply user',this.props,this.state.allblog)
        return(
            <React.Fragment>  
                    <div className="row">
                        <div className="container  p-2 d-flex justify-content-center">
                            <div className="card text-center">
                                <div className="card-body">
                                {this.state.alldata.map((ele,index)=>{
                                    if(this.props.match.params.id==ele._id.$oid)
                                    {
                                        return(
                                            <div key={index} >
                                                <p  className="lead">UserName : {ele.name}</p>
                                                <p className="lead">Phone : {ele.phone}</p>
                                            </div>
                                        )
                                    }
                                })}
                               {/* <Link to={{pathname:/delete1/${index + 1},state: { foo: ele.name}}}></div> */}
                                <Link to={{pathname:'/addblog',state:{"id":`${this.props.match.params.id}`}}} className="nav-link"><button className="btn btn-danger" onClick={this.create_blog}>
                                 Add blog</button> </Link>
                                 
                                </div>
                            </div>                        
                                   
                        </div>                        
                    </div>
                    {this.state.hide==false?<div className="row">
                        <div className="container  p-2 d-flex justify-content-center">
                        <div className="row">
                                {this.state.allblog.filter((item)=>item.head!='mahesh1').map((ele,index)=>{
                                    console.log(ele.user_id)
                                     return(                                         
                                            <div key={index} className="col-lg-3" >
                                                {/* <Blog_details {...ele}/> */}
                                                <div className="card text-center mb-3">
                                                    <div className="card-body">
                                                        <p  className="lead">Blog name : {ele.head}</p>
                                                        <p className="lead">Blog : {ele.text}</p>
                                                        <p>comments</p>
                                                {this.state.blogcomments.map((ele2,index)=>{
                                                    if(ele2.user_id==ele.userId){                                                        
                                                   return (<p key={index} className="lead">{ele2.comment}</p>)
                                                    }
                                                })}
                                                    </div>
                                                    {this.state.comment_toggle==true?
                                                    <div>
                                                        <input className="m-2" type="text" value={this.state.phone} onChange={this.handle2}  placeholder="Add comment" />
                                                        <button className="btn btn-outline-success m-2" onClick={this.submit_comment}>Submit</button>
                                                    </div>:
                                                    <button className="btn btn-danger" onClick={this.comment_toggle}>comment</button>
                                                    }
                                                </div>
                                            </div>                                             
                                        )
                                })} 
                                  </div>          
                        </div>              
                    </div>:null}
                    
                    
            </React.Fragment>
        );
    }
}