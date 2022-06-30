import {useForm} from "react-hook-form"
import {Users} from "./components"

function App() {

return (
    <div>
        <Users/>

    </div>);
}

export default App;

//
// let {register, handleSubmit,formState: {errors}} = useForm ({defaultValues:{
//         name:'name',
//         username:'username',
//     }})
//
// let submit = (item) => {
//     console.log(item);
//     fetch("https://jsonplaceholder.typicode.com/users", {
//         method: 'POST',
//         body: JSON.stringify(item),
//         headers: {'Content-type': 'application/json; charset=UTF-8'},
//     })
//         .then(response => response.json())
//         .then(result => console.log(result));
//
// }
//
// return (
//     <div>
//         <form onSubmit={handleSubmit(submit)}>
//             <input type="text" {...register("name",{required: true})}/>
//
//             {errors.title && <span> field is required </span>}
//
//             <input type="text" {...register('username')}/>
//
//             <button>save</button>
//
//         </form>
//     </div>);