import React from "react";
import {Link,IndexLink} from "react-router";

const Header=()=>{
    return(
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {"|"}
            <Link to="/about" activeClassName="active">About</Link>
            {"|"}
            <Link to="/course" activeClassName="active">Course</Link>
            {"|"}
            <Link to="/calculator" activeClassName="active">calculator</Link>
        </nav>
    );
};
export default Header;
