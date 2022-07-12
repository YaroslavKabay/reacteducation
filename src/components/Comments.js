import React,{Component} from "react";
import {CommentApiService} from "../services";
import {Comment} from "../components";

export class Comments extends Component{

    state = {comments:[], x:'lala'};
    constructor(props) {
        super(props);
        this.commentApiService= new CommentApiService();
        this.commentApiService.getComments().then(value => this.setState({comments:value}));
    }

    render() {
        return(
            <div>
                {this.state.comments.map(value => <Comment key={value.id} item={value}></Comment>)}
            </div>
        );
    }

}
