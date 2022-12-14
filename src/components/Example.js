import {useState,useEffect} from "react";


export default function Example(){

    let [id, setId] = useState([]);


    const onClick = () => {
        setId(Math.round((Math.random()*9) +1 ));
    };
    let [user, setUser] = useState([]);

    useEffect(() => {  // потрібен для того щоб юзстейт відпрацював лише раз а нерелоадився весь час (async)
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setUser({...value}); // ceттер завжди має приймати обєкт з новим посиланням, через це ми використовуєм спред(щоб зробити новий обєкт)
                // так само робим з масивом ([...value] )
            });
    },[id]) // dependencies - якщо ми хочемо щоб юзефект відпрацював один раз то нам треба цей пустий масив, ми передаєм туди якусь змінну.
    // Якщо змінна буде змінюватись, то юз ефект перезапуститься


    return (<div>
        <button onClick={onClick}> Click me and get random user</button>
        <h2>{user.name}</h2>
        </div>
);}
