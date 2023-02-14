import React , {Component} from "react";
class UnMount extends Component {
    constructor(){
        super()
        this.state={}
        console.log("constructor");
    }
    componentWillUnmount(){
        alert("deleted");
    }
    render() {
        console.log("render");
        return(
            <> 
                <h1 >UnMount </h1>
                <button onClick={this.componentWillUnmount}>Deleted</button>
            </>
        );
    }
}
export default UnMount;