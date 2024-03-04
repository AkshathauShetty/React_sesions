import { Outlet, Link } from "react-router-dom";


const Layout3=()=>{
    return(
        <>
            <nav>
                <ol>
                    <li>
                        <Link to="/axiosDemo">Get requests</Link>
                    </li>

                    <li>
                        <Link to="/axiosDemo/post">Post requests</Link>
                    </li>

                    

                </ol>
            </nav>

            <Outlet />
        </>
    )
}


export default Layout3
