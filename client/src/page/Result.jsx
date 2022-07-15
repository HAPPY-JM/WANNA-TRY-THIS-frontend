import React, { useContext } from 'react';
import { AppContext } from '../App';

const Result = () => {

    const data = useContext(AppContext)
    console.log(data)
    return (
        <>
            <h3>aaa</h3>
        </>
    );
}

export default Result;