import { useNavigate } from "react-router-dom"


const Home=()=>{

    const navigate = useNavigate()

    return(
        <>
            <div>Home page </div>

            <button
            onClick={()=>
            navigate(-1)}>
            Go back
            </button>
        </>
    )
}

export default Home