import {useState,useEffect} from "react";

import Post from '../post/Post';

export default function Posts(){

    let [posts, setPosts] = useState([]); // setPosts сетапає інфу з фетча в posts (setter,getter) . [] - default empty value
    let [post, setPost] = useState([]);

    useEffect(() => {  // потрібен для того щоб юзстейт відпрацював лише раз а нерелоадився весь час (async)
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts(value);
            });
    },[]) // якщо ми хочемо щоб юзефект відпрацював один раз то нам треба цей пустий масив

    const chosePost = (item) => {
        setPost(item)
    };

    return (
        // post &&  - якщо існує пост то зроби умову
        <div>
          {post.id && <div> {post.id} {post.body}</div>}

            <h2> post components page</h2>

          {posts.map((post, index)=> <Post
              key={index}
              item={post}
              color={'silver'}
              chosePost={chosePost}
          />)}


      </div>); // props is an object where you set new value (item), key is just needed to identify each component in array posts
    //можна без дужок і лише з постом(post, index), індекс потрібен лише для key
}
