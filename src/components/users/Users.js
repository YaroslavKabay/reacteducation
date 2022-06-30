import {useForm} from "react-hook-form"
import {CreateUser} from "../../services"
export default function Users(){
    let {register, handleSubmit,formState: {errors}} = useForm ({defaultValues:{
            name:'name',
            username:'username',
        }})


    let submit = (item) => {
        CreateUser(item).then(result => console.log(result))

    }



  return (
      <div>

          <form onSubmit={handleSubmit(submit)}>
              <input type="text" {...register("name",{required: true})}/>

              {errors.title && <span> field is required </span>}

              <input type="text" {...register('username')}/>

              <button>save</button>

          </form>

      </div>
  );
}