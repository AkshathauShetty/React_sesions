import { Button } from "react-bootstrap"


const WedStyle=()=>{

    return(
        <div className="contents">
            <h1>React-bootstrap and stylings!!</h1>
            <div>
                <button className="content">
                    Click here- is a button styled using style sheet
                </button>
            </div>
            <br></br>
            <div>
                <Button variant="primary">Button-bootstrap button</Button>
            </div>
        </div>
    )
}

export default WedStyle