import React from 'react';
// import styles from "./child.module.css"
import styles from "./child.module.css"
const Child = () => {
    console.log("hellohh")
    return (
        <div className='container'>
            
            <h1 className={styles.title}>hello child</h1>
        </div>
    );
}

export default Child;
