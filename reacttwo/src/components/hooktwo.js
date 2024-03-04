import { hasSelectionSupport } from '@testing-library/user-event/dist/utils'
import React from 'react'
import { useState } from 'react'

const Hooktwo = () => {
    
 const [name,setname]  = useState("not set")

  return (
    <div>
        <label>Enter name</label>
        <input type='text' placeholder='enter name' onChange={(events)=>
        setname(events.target.value)}>

        </input>
        {name}
    </div>
  )
}
  


export default Hooktwo
