import { useCallback, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import {
    atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt
  } from 'mathjs'
import { useMemo } from 'react';
import './styles/style11.css'


const Calculator=()=>{

    const [res,setRes]=useState("")

    //below has the exp and result
    const [result,setNum]=useState("")
  

    const setInput=(e)=>{
    
        const val = e.target.value
        console.log("called",e.target.name)

        if(val=="C"){
            setNum("")
        }
        else if(val=="="){
            
            // const total = math.compile(res)
            // const result = total.evaluate()
            // setNum(result)
            // const result=evaluate(res)
            // setNum(result)   
            // compute(res)   
            console.log(result) 
            setRes(result)
            // compute(result)
            
            console.log("computation",computation)
            
            
        }
        else{
            setNum(vals=>vals+val)
        }
    }

    const compute=(valu)=>{  
            console.log("evaluation",evaluate(valu))          
            return evaluate(valu)
        }

    const computation = useMemo(()=>{
        console.log("called",res)
        return compute(res)     
    },[res]
    )

    

   

    return(
        <div >

            <h1>Calculator</h1>
           
            <div style={{textAlign:"center",padding:"5px", border:"2px solid black",backgroundColor:"lightcyan"}}>

            {/* <input  value={res} /> */}
            
            {<div style={{fontStyle:"italic"}}>Result: {computation}</div>}
            
            <input value={result} />

                <ButtonToolbar className="mb-3 justify-content-center" aria-label="Toolbar with Button groups" style={{paddingTop:"2%"}} >
                    <ButtonGroup className="me-2" aria-label="First group">
                        <Button variant="primary" value="1" onClick={setInput} >1</Button>{' '}
                        <Button variant="primary"  value="2" onClick={setInput} >2</Button>{' '}
                        <Button variant="primary"  value="3" onClick={setInput}>3</Button>{' '}
                        <Button variant="primary"  value="+" onClick={setInput}>+</Button>
                    </ButtonGroup>
                </ButtonToolbar>
                <ButtonToolbar className="mb-3 justify-content-center" aria-label="Toolbar with Button groups" >
                    <ButtonGroup className="me-2" aria-label="First group">
                        <Button variant="primary"  value="4" onClick={setInput}>4</Button>{' '}
                        <Button variant="primary"  value="5" onClick={setInput}>5</Button>{' '}
                        <Button variant="primary"  value="6" onClick={setInput}>6</Button>{' '}
                        <Button variant="primary"  value="-" onClick={setInput}>-</Button>
                    </ButtonGroup>
                </ButtonToolbar>

                <ButtonToolbar className="mb-3 justify-content-center" aria-label="Toolbar with Button groups">
                    <ButtonGroup className="me-2" aria-label="First group">
                        <Button variant="primary"  value="7" onClick={setInput}>7</Button>{' '}
                        <Button variant="primary"  value="8" onClick={setInput}>8</Button>{' '}
                        <Button variant="primary"  value="9" onClick={setInput}>9</Button>{' '}
                        <Button variant="primary"  value="/" onClick={setInput}>/</Button>
                    </ButtonGroup>
                </ButtonToolbar>

                <ButtonToolbar className="mb-3 justify-content-center" aria-label="Toolbar with Button groups" >
                    <ButtonGroup className="me-2" aria-label="First group">
                        <Button variant="primary"  value="*" onClick={setInput}>*</Button>{' '}
                        <Button variant="primary"  value="0" onClick={setInput}>0</Button>{' '}  
                        <Button variant="primary"  value="C" onClick={setInput}> C </Button>{' '}  
                        <Button variant="primary"  value="=" onClick={setInput}>=</Button>{' '}  
                    </ButtonGroup>
                </ButtonToolbar>
            </div>
            

        </div>
    )
}


export default Calculator