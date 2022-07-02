import {Post} from "../post"

export function Posts({posts}){
  return (
      <div>
          {posts.map(value =>
              <Post key={value.id}
                    item={value}
              />)}
      </div>);
}
