import { useState } from "react"


const Formitem=()=>{

    const [forms, display] = useState({
        name:"none",
        phone:"none",
        email:"none",
        password:"none"
    });

    const updateChange= (event)=>{
        let name = event.target.name
        let value = event.target.value
        display({
            ...forms,
            [name]:value
         })
    };

    return(
    <div>
        {/* <form>
            <input type='text' placeholder="enter name" value={forms.name} onChange={event=>display({forms.name=event.target.value})}></input>
            <input type='phone' placeholder="enter phone" onChange={event=>display({forms.phone=event.target.value})}></input>
            <input type='email' placeholder="enter email" onChange={event=>display({forms.email=event.target.value})} ></input>
            <input type='password' placeholder="enter password"  onChange={event=>display({forms.password=event.target.value})}></input>

        </form> */}

         <form>
            <input type='text' placeholder="enter name" name="name" value={forms.name} onChange={updateChange} ></input>
            {forms.name}
            <input type='phone' placeholder="enter phone" name="phone" value={forms.phone}  onChange={updateChange}></input>
            {forms.phone}
            <input type='email' placeholder="enter email" name="email" value={forms.email} onChange={updateChange} ></input>
            {forms.email}
            <input type='password' placeholder="enter password" name="password" value={forms.password} onChange={updateChange} ></input>
            {forms.password}
        </form>
        
     </div>

    )
}

export default Formitem