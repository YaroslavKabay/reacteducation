import React , {Component} from "react";

class Comment extends Component{

    constructor(props,context) {
        super(props,context);
        this.xxx = this.props.item;
    }

    render() {
        return (<div>
            {this.xxx.id} {this.xxx.name}

        </div>);

    }

}
export default Comment;