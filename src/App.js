import {useForm} from "react-hook-form"

function App() {
    let usersIds = [
        {id:1, name:'sdfldsjfs'},
        {id:2, name:'ssfldsjfs'},
        {id:3, name:'afs'},
        {id:4, name:'saaaasjfs'},
        {id:5, name:'sjdfsdfsdfs'},
        {id:6, name:'sdfldsjfs'},
        {id:7, name:'gdgdgldsjfs'},
        {id:8, name:'sfdgfldsjfs'},
        {id:9, name:'ghfhldsjfs'},
    ];

    let {register, handleSubmit,formState: {errors}} = useForm ({defaultValues:{
      title:'title',
      body:'body',

    }
  })

let submit = (obj) => {
  console.log(obj);

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {'Content-Type': 'application/json; charset:UTF-8',},
    })
        .then(response => response.json())
        .then(result => console.log(result));


}



  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <input
            type="text"
            {...register("title",{required: true})}/>

          {errors.title && <span> field is required </span>}

          <input
              type="text"
              {...register('body')}/>

          <select {...register("userId")}>
              {usersIds.map(value => <option key={value.id} value={value.id}>{value.name}</option>)}
          </select>

          <button>save</button>

      </form>
    </div>);
}

export default App;
