import { Link, Outlet } from "react-router-dom"

const Layout =()=>{
    return(
        <>
            <ul>
                <li>
                    <Link to ="/">Home</Link>
                </li>

                <li>
                    <Link to="/aboutus">About us</Link>
                </li>

                <li>
                    <Link to='/contactus'>Products  </Link>
                </li>

            </ul>

            <Outlet/>
        </>
    )
}

export default Layout