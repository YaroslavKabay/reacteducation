import React,{Component} from "react";

import {PostApiService} from "../services";
import {Post} from "../components";

export class Posts extends Component{

    state = {posts:[], x:'lallalal'};
    constructor(props) {
        super(props);
        this.postApiService= new PostApiService();
        this.postApiService.getPosts().then(value => this.setState({posts:value}));
    }

    render() {
        return(
            <div>
                {this.state.posts.map(value => <Post key={value.id} item={value}></Post>)}
            </div>
        );
    }

}
