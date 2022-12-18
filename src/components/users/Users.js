import {useForm} from "react-hook-form" ;

import {createUser} from "../../services/" ;


export function Users(){
    let userIds = [
        {id:1, name: "one"},
        {id:2, name: "two"},
        {id:3, name: "three"},
    ]



    let {register, handleSubmit, formState: {errors}} = useForm ({defaultValues:{ // useForm is needed to work with forms and info in it
            name:'name', // просто дефолтні значення, мають співпадати з назвами в формі
            username:'username',
        }})// register - реєструє поле в обєкті і визначає його назву,  handleSubmit - відхоплює його
    // formState - стан форми, можна звідти витягнути онтач, ерори


    let submit = (item) => {
        createUser(item).then(result => console.log(result))

    }

    return (
      <div>

          <form onSubmit={handleSubmit(submit)}>
              <input type="text" {...register("name", {required: true})}/>

              {errors.name && <span> field is required </span>}

              <input type="text" {...register('username')}/>

              <select {...register('userId')}>
                  {userIds.map(value => <option key={value.id} value={value.id}>{value.name}</option>)}
              </select>

              <button>save</button>

          </form>

      </div> // handleSubmit бере інфу з регістер і сетапає в , сабміт допустим
  );
}