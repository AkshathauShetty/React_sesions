import useFetchdata from "./fetchData"
import Table from 'react-bootstrap/Table';


const Displayfetch=()=>{

    const [data,states] = useFetchdata("https://jsonplaceholder.typicode.com/comments")

    return(
        <>
            {console.log(states.isLoading,states.isError)}
            <h1>Display using fetch API calls</h1>
            {console.log("data in display",data)}
            { states.isLoading ? <div> Loading... </div>:states.isError?<div>Error loading the page!</div>:
                    <div>
                    <h3>data :</h3>

                    <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>postId</th>
                            <th>id</th>
                            <th>Name</th>
                            <th>Email</th>             
                        </tr>
                    </thead>
                    <tbody>
                        {
                        data.map((item)=>{
                        {return(
                            <tr>
                                <td>{item.postId}</td>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                            </tr>)
                        }
                        }
                        )
                        }
                    </tbody>
                    </Table>
                    </div>
            }

        </>
        
    )
}


export default Displayfetch