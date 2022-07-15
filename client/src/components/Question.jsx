import React, { useContext}from 'react'
import { AppContext } from '../App';
import styled from "styled-components";

const QuestionView = styled.div`
    height: 150px;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
      background: #228be6;

    
`
    

const Question = () => {
    const {question} = useContext(AppContext)
    console.log("-----------------------")
    console.log(question)
    const firstQuestion = question[0]
    console.log(firstQuestion)
    console.log("-----------------------")
    const listQuestion = firstQuestion.map((question) => (
        <QuestionView>{ question}</QuestionView>
    ))
    return (<>
        <div>{listQuestion}</div>
    </>
    )
}

export default Question;