import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"

const Menu=()=>{

    const handleClick=()=>{
        window.location.href='/cls/classtwo'
    }

    return(
        <>
            <div>
            <li>
                    <Link to="/cls">Class one</Link>
                    </li>

                    <li>
                        <Link to="/cls/classtwo">Class two</Link>
                    </li>

                <button onClick={ ()=>{handleClick()} }>Click here</button>
                <Outlet />
            </div>
        </>
    )
}


export default Menu