import React,{PropTypes} from "react";
import Header from "./common/Header";
// import "../styles/styles.css";
class App extends React.Component{
    render(){
        return(
            // container-fluid
            <div >
                {/* <p>Header here..</p> */}
                 <Header/>
                  {this.props.children}
            </div>
        );
    }
}
App.propTypes={
    children:PropTypes.object.isRequired
};
export default App;