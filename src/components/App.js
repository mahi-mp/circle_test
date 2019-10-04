import React from "react";
import Create_user from "./Create_user";
import All_user from "./All_user";
import {Route, Link, Redirect} from "react-router-dom";
import Level from "./Level"
// import NewList from "./NewList";
import Display_user from "./Display_user";
import Add_blog from "./Add_blog";

export default class App extends React.Component
{
    render()
    {
        return(
            <React.Fragment>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link to="/all_user" className="navbar-brand">All User</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#data" aria-controls="data" aria-expanded="false" aria-label="toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="data">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <Link to="/createUser" className="nav-link">Create User<span className="sr-only">(current)</span></Link>
                                </li>                    
                                <li className="nav-item">
                                    <Link to="/lavel" className="nav-link">Lavel</Link>
                                </li>
                           </ul>
                            {/* <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search Blog" />
                                <button className="btn btn-outline-success my-2 my-sm-0" 
                                type="submit"> <Link to="/search" className="nav-link text-white">Search</Link></button>
                            </form> */}
                        </div>
                    </nav>
                </div>
                <Route exact path="/" render = {()=><Redirect to="/all_user"/>}   />
                <Route  path="/all_user" component={All_user}  />
                <Route  path="/user/:id" component={Display_user} />
                <Route  path="/addblog" component={Add_blog} />
                <Route  path="/createUser" component={Create_user} />
                <Route  path="/lavel"  component={Level}/>
                {/* <Route path="/createList/:id"  component={NewList}/> */}
                <Route path="/search"  />
            </React.Fragment>
        );
    }
}