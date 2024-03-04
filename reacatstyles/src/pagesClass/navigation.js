import { Outlet, Link } from "react-router-dom";


const Layout2=()=>{
    return(
        <>
            <nav>
                <ol>
                    <li>
                        <Link to="/cls">Class one</Link>
                    </li>

                    <li>
                        <Link to="/cls/classtwo">Class two</Link>
                    </li>

                </ol>
            </nav>

            <Outlet />
        </>
    )
}


export default Layout2
