import React from "react";

export default class All_user extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            alldata:[],            
        }
    }

    handle=(e)=>
    {
        this.props.history.push(`/${e.target.value}`);
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
    }
    render()
    {       
        return(
            <React.Fragment>
                <div className="container">
                    <div className="jumbotron mt-4">
                        <div className="d-flex justify-content-center">
                            <select onClick={this.handle} className=" custom-select w-50">
                                <option defaultValue>select user</option>                                
                                    {this.state.alldata.map((ele,index)=>{                                         
                                        return(
                                            <option  key={index} value={ele._id.$oid}>{ele.name}</option>
                                        );
                                    })}                                
                            </select>    
                            <button className="btn btn-secondary" >show</button>                        
                        </div>                        
                    </div>                    
                </div>
            </React.Fragment>
        );
    }
}