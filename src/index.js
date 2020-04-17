import React from "react";
import "babel-polyfill"; 
import {render} from "react-dom";
import {Router,browserHistory} from "react-router";
import route from "./api/route";
import "./api/styles/styles.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Home from "./api/components/home/Home";
// import App from "./api/components/App";

render(<Router history={browserHistory} routes={route} className="App"/>,

    document.getElementById("app"));
/* eslint-disable no-console */
// console.log('hi');
