import { useForm } from "react-hook-form";


const UseFormsss=()=>{

    const { handleSubmit, register, formState: { errors } } = useForm();
    const onSubmit = values => console.log(values);



    return (

        
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Use forms </h3>
          <input
            type="email"
            {...register("email", {
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address"
              }
            })}
          />
          <br></br>
          {errors.email && errors.email.message}
          <br></br>
    
          <input
            {...register("username", {
              validate: value => value !== "admin" || "Nice try!"
            })}
          />
          <br></br>
          {errors.username && errors.username.message}
          <br></br>
    
          <button type="submit">Submit</button>
        </form>
      );
}

export default UseFormsss