import {Link,Routes,Route} from "react-router-dom" ;

import TodosPage from "./pages/TodosPage";
import AlbumsPage from "./pages/AlbumsPage";
import CommentsPage from "./pages/CommentsPage";



function App() {
  return (
      <div >
        <h2> Menu </h2>
        <ul>
          <li><Link to={'/todos'}> todos </Link> </li>
          <li><Link to={'/albums'}> albums </Link> </li>
          <li><Link to={'/comments'}> comments </Link> </li>
        </ul>

        <div>
          <h3>Content</h3>
          <Routes>

            <Route path={'/todos'} element={<TodosPage/>}/>
            <Route path={'/albums'} element={<AlbumsPage/>}/>
            <Route path={'/comments'} element={<CommentsPage/>}/>


          </Routes>

        </div>


      </div>);
}

export default App;