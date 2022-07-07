import {Link} from "react-router-dom" ;

export default function TodosPage(){
  return (
      <div>
          <h4>submenu</h4>
          <ol>
              <li>
                  <Link to={'sometodos'}>sometodos</Link>
              </li>

              {/*<li>*/}
              {/*    <Link to={'albums'}>albums</Link>*/}
              {/*</li>*/}

              {/*<li>*/}
              {/*    <Link to={'comments'}>comments</Link>*/}
              {/*</li>*/}

          </ol>
      </div>
  );
}