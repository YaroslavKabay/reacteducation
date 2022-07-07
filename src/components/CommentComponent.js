import {Link} from "react-router-dom" ;

export default function CommentsComponent({comment}){
    return (
        <div>
            {comment.name} - <span> <Link to={comment.id.toString()} state={{...comment}}> Check posts </Link></span>
        </div>
    );
}

