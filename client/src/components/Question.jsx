import React, { useContext}from 'react'
import { AppContext } from '../App';
const Question = () => {
    const question = useContext(AppContext)
    console.log("-----------------------------")
    console.log(question)
    return (<>
        <span>{question}</span>
    </>
    )
}

export default Question;