import {useState, useEffect} from "react" ;
import User from "../user/User" ;
import {getUsers} from "../../services"

export function Users({lift}){
    let [users, setUsers] = useState([]);
    useEffect( () => {


        getUsers ().then(({data}) => setUsers([...data]))
    }, []);

    return (
      <div>
          {
              users.map(value => <User
                  key = {value.id}
                  item={value}
                  lift = {lift}
              /> )
          }
      </div>
  );
}