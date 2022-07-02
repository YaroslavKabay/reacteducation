import {useForm} from "react-hook-form"

import {createComment} from "../../services/"


export function Comments(){

    let {register, handleSubmit,formState: {errors}} = useForm ({defaultValues:{
            body:'your text',
            email:'youralias@domain.com',
        }})


    let submit = (item) => {
        createComment(item).then(result => console.log(result))

    }

    return (
        <div>

            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register("body",{required: true})}/>

                {errors.title && <span> field is required </span>}

                <input type="text" {...register('email',{required: true})}/>

                <button>save</button>

            </form>

        </div>
    );
}