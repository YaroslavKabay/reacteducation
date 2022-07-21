import React , {Component} from "react";

export class Comment extends Component{

    // constructor(props,context) {
    //     super(props,context);
    //     this.xxx = this.props.item;
    // }
    constructor(props) {
        super(props);
    }

    render() {
        const {name,body} = this.props.comment;


        return (<div>
            {/*{this.xxx.id} {this.xxx.name}*/}
            {name}--{body}
        </div>);

    }

}
