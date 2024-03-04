import { Outlet, Link } from "react-router-dom";


const Layout=()=>{
    return(
        <>
            <nav>
                <ol>
                    <li>
                        <Link to="/">Theme Switching with Context</Link>
                    </li>

                    <li>
                        <Link to="/form"> Form Validation with useRef</Link>
                    </li>

                    <li>
                        <Link to="/useCb">Performance Optimization with useCallback</Link>
                    </li>

                    <li>
                        <Link to="/calcy">Memoization for Expensive Calculations</Link>
                    </li>

                    <li>
                        <Link to="/useEffct">Fetching Data with useEffect</Link>
                    </li>

                </ol>
            </nav>

            <Outlet />
        </>
    )
}


export default Layout
