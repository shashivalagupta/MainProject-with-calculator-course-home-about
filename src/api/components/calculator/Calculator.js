import React from "react";
// import { transformFromAst } from "babel-core";
import "./formstyle.css";
class Calculator extends React.Component{
    render(){
        return(
            <div className="formstyle">
                <h1 text-align="center">Calculator..</h1>
                <form name="forms">
                    
                   <input type="text" name="answer"></input><br></br>

                   <input type="button" value="1" onClick={(e)=>forms.answer.value +='1'}></input>
                   <input type="button" value="2" onClick={(e)=>{forms.answer.value +='2';}}></input>
                   <input type="button" value="3" onClick={(e)=>{forms.answer.value +='3'}}></input>
                   <br></br>
                   <input type="button" value="4" onClick={(e)=>{forms.answer.value +='4'}}></input>
                   <input type="button" value="5" onClick={(e)=>{forms.answer.value +='5'}}></input>
                   <input type="button" value="6" onClick={(e)=>{forms.answer.value +='6'}}></input>
                   <br></br>
                   <input type="button" value="7" onClick={(e)=>{forms.answer.value +='7'}}></input>
                   <input type="button" value="8" onClick={(e)=>{forms.answer.value +='8'}}></input>
                   <input type="button" value="9" onClick={(e)=>{forms.answer.value +='9'}}></input>
                   <br></br>
                   <input type="button" value="+" onClick={(e)=>{forms.answer.value +='+'}}></input>
                   <input type="button" value="-" onClick={(e)=>{forms.answer.value +='-'}}></input>
                   <input type="button" value="*" onClick={(e)=>{forms.answer.value +='*'}}></input>
                   <br></br>
                   <input type="button" value="/" onClick={(e)=>{forms.answer.value +='/'}}></input>
                   <input type="button" value="0" onClick={(e)=>{forms.answer.value +='0'}}></input>
                   <input type="button" value="=" onClick={(e)=>{forms.answer.value =eval(forms.answer.value);}}></input>
                   <br></br>
                   <input type="button" value="clear" onClick={(e)=>{forms.answer.value ="";}}></input>
                </form>
            </div>
        );
    }
}
export default Calculator;