import React , {Component} from "react";

export class Post extends Component{

    constructor(props,context) {
        super(props,context);
        this.xxx = this.props.item;
    }

    render() {
        return (<div>
            {this.xxx.id} {this.xxx.title}

            </div>);

    }

}
