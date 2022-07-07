import {useLocation} from "react-router-dom"

export default function PostsPage(){

    let location = useLocation();
    let {state:user}= location;

  return (
      <div>
         {user.body}
      </div>
  );
}