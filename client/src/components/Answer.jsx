import React from "react"
import styled from "styled-components";




const Abutton = styled.button`
    height: 2.25rem;
    font-size: 1rem;
    border-radius: 10px;
    margin-left: 10px;
      background: white;
    /* &:hover{
        background: #339af0;
    }
    &:active{
        background: #1c7ed6;
            & + & {
        margin-left: 1rem;
    }
    } */
`


const Answer = () => {

    const answerList1 = ["10~20대", "30대~40대", "50대 이상"];
    const answerList2 = ["좋음", "그저 그럼", "나쁨"];
    const answerList3 = ["육류", "해산물", "그외"];
    const answerList4 = ["만원 이하", "만원~3만원", "3만원 이상"]
    //   ["10~20대", "30대~40대", "50대 이상"],
    //   ["좋음", "그저 그럼", "나쁨"],
    //   ["육류", "해산물", "그외"],
    //   ["만원 이하", "만원~3만원", "3만원 이상"]   
    
    const answerButton = answerList1.map((el,idx)=> <Abutton>{el}</Abutton> )
    return (
        <>
            <div>{ answerButton}</div>
        </>
    )
}


export default Answer;