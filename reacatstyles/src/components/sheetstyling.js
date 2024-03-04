import Button from 'react-bootstrap/Button';

import '../styles/sheet1.css'
import styles from '../styles/modstyle1.module.css'

const Sheetstyling =()=>{
    return(
    <>
        <div className="greet">
            Hello from  sheet stylings
        </div>


        <div className='greetings'>
                Hello from sheet greetings
        </div>

        <Button variant="primary">Primary</Button>

        <div  className={styles.ocean }> Module styling   </div>


    </>


    )
}

export default Sheetstyling