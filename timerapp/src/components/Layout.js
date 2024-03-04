import { Link, Outlet } from "react-router-dom"

const Layout =()=>{
    return(
        <>
            <ul>
                <li>
                    <Link to ="/">Level 4 timer</Link>
                </li>

                <li>
                    <Link to="/l3">Level 3 timer</Link>
                </li>

                <li>
                    <Link to='/l2'>Level 2 timer</Link>
                </li>

                <li>
                    <Link to='/l1'>Level 1 timer</Link>
                </li>
            </ul>

            <Outlet/>
        </>
    )
}

export default Layout