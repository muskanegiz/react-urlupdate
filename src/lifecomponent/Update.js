import React , {Component} from "react";
class Update extends Component {
    constructor(){
        super()
        this.state={}
        console.log("constructor");
    }
    componentDidUpdate(){
        console.log("Update");
    }
    render() {
        console.log("render");
        return(
            <> 
                <h1> Update </h1>
            </>
        );
    }
}
export default Update;