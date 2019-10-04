import React from "react";
import Add_blog from "./Add_blog";
import {Link,Route} from "react-router-dom";
export default class Blog_details extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            alldata:[],
            
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
    

    submit_comment=()=>
    {
        alert("commented")
    }
    render()
    {    
        console.log(this.props)
        return(
            <React.Fragment>  
                    <div className="row">                    
                    {<div className="row">
                        <div className="container  p-2 d-flex justify-content-center">
                        <div className="row">
                                {this.props.allblog.map((ele,index)=>{
                                    console.log(ele.user_id)
                                     return(                                         
                                                <div className="card text-center mb-3">
                                                    <div className="card-body">
                                                        <p  className="lead">Blog By : {ele.head}</p>
                                                        <p className="lead">Blog : {ele.text}</p>
                                                        <p>comments</p>
                                                {ele.blogcomments.map((ele2,index)=>{
                                                    if(ele2.user_id==ele.userId){                                                        
                                                   return (<p key={index} className="lead">{ele2.comment}</p>)
                                                    }
                                                })}
                                                    </div>
                                                    {ele.comment_toggle==true?
                                                    <div>
                                                        <input className="m-2" type="text" value={ele.state.phone} onChange={ele.handle2}  placeholder="Add comment" />
                                                        <button className="btn btn-outline-success m-2" onClick={ele.submit_comment}>Submit</button>
                                                    </div>:
                                                    <button className="btn btn-danger" onClick={ele.comment_toggle}>comment</button>
                                                    }
                                                </div>                                     
                                        )
                                })} 
                                  </div>          
                        </div>              
                    </div>}
                    
                    </div>
            </React.Fragment>
        );
    }
}