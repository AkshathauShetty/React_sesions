import { Outlet, Link } from "react-router-dom";


const Layout=()=>{
    return(
        <>
            <nav>
                <ol>
                    <li>
                        <Link to="/">Greeting</Link>
                    </li>

                    <li>
                        <Link to="/counter">Counter</Link>
                    </li>

                    <li>
                        <Link to="/tempconv">Temperature converter</Link>
                    </li>

                    <li>
                        <Link to="/user">User Status</Link>
                    </li>

                    <li>
                        <Link to="/styles">React-bootstrap and styling</Link>
                    </li>

                </ol>
            </nav>

            <Outlet />
        </>
    )
}


export default Layout
