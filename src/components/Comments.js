import React,{Component} from "react";
import {CommentApiService} from "../services";
import {Comment} from "../components";

export class Comments extends Component{

    // state = {comments:[], x:'lala'};
    constructor(props) {
        super(props);
        this.state = {comments: []}

    }

    componentDidMount (){
        CommentApiService.getAll().then(({data}) => this.setState({comments:data}) )
    }

    render() {
        return(
            <div>
                {this.state.comments.map(value => <Comment key={value.id} item={value}/>)}
            </div>
        );
    }

}
