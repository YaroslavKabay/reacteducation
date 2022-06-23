import {useEffect,useState} from "react";
import User from "../components/user/User";

export default function Posts(){

    let [users, setUsers] = useState ([]);
    let [user, setUser] = useState ({});

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then (value => value.json())
            .then(value => {
                setUsers(value);
                })

        }, [])

    const choseUser = (item) => {
        setUser(item)
    };

  return (
      <div>
          { user && <div> {user.email} </div> }
        <h2>Posts</h2>
          {users.map(user =>
              <User
                  key = {user.id}
                  item={user}
                  choseUser = {choseUser}
              /> )}

          </div>);
}