import React, { Component } from "react";
const UpdateComponent = (OriginalComponent)=>{
    class NewComponent extends Component{
        constructor(props){
            super(props)
            this.state={
                count:0
            }
        }
        increment =()=>
        {
          this.setState((value)=>{
            return{count : value.count+1}
          })
        }
        render(){
            return(
                <OriginalComponent count={this.state.count} increment={this.increment}/>
            )
        }
    }
    return NewComponent;
}
export default UpdateComponent;