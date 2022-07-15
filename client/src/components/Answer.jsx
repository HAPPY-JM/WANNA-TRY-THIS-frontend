import React,{ useContext} from "react"
import { AppContext } from "../App";
import styled from "styled-components";

const Abutton = styled.button`
    height: 2.25rem;
    font-size: 1rem;
      background: #228be6;
    &:hover{
        background: #339af0;
    }
    &:active{
        background: #1c7ed6;
            & + & {
        margin-left: 1rem;
    }
    }
`
    


const Answer = () => {
        const {answer} = useContext(AppContext)
    console.log("-----------------------")
    console.log(answer)
    const firstAnswer = answer[0]
    console.log(firstAnswer)
    console.log("-----------------------")
    const listAnswer = firstAnswer.map((answer) => (
        <Abutton>{ answer}</Abutton>
    ))

    return (
        <>
            <div>{ listAnswer}</div>
        </>
    )
}


export default Answer;