import React from "react";
import {Link} from "react-router-dom";
export default class Display_user extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            
        }
    }

    
    create_list=()=>{
        this.setState({
            flag:true
        })
        const axios = require('axios'); 
        const requestParam = {
        method: 'GET',
            url:`http://localhost:5000/show/${this.props.match.params.id}`,
        }
        axios(requestParam)
        .then(response=>console.log(response))
        .catch(err=>console.log(err));        
    }
    
    

    

    componentDidMount()
    {
    }  
    render()
    {    
        console.log(this.state.arr)    
        return(
            <React.Fragment>  
                <div className="container">
                    <div className="row">
                        <div className="container">
                            
                        </div>
                    </div>
                    <div className="row"></div>
                </div>
            </React.Fragment>
        );
    }
}