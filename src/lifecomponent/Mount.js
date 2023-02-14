import React , {Component} from "react";
class Mount extends Component {
    constructor(){
        super()
        this.state={}
        console.log("constructor");
    }
    componentDidMount(){
        console.log("mount");
    }
    render() {
        console.log("render");
        return(
            <> 
                <h1> Mount </h1>
            </>
        );
    }
}
export default Mount;