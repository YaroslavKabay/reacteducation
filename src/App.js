import {useState} from "react" ;

import {Users,Posts} from "./components"
import {getUserPosts} from "./services" ;



function App() {
    let [posts,setPosts] = useState([])
    const lift = (id)=> {
        getUserPosts(id).then(({data}) =>{
            setPosts ([...data])
        })
    }

    return (
    <div >
        <div>  <Users lift ={lift}/> </div>
        <div>  <Posts po sts={posts}/> </div>
    </div>
  );
}

export default App;

