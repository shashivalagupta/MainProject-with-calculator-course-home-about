import React from "react";
import {Link} from "react-router";
class Home extends React.Component{
    render(){
        return(
           
        <div className="jumbotron">
           <h1>HomePage </h1>
           <h2>Pluralsight Administration</h2>
           <p>React,redux and react router in Es6 for ultra responsive web app</p>
           <Link to="about" className="btn btn-primary btn-lg">Learn More..</Link>
        </div>
        );
    }
}
export default Home;