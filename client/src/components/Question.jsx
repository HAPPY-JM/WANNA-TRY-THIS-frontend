import React, { useState, useContext } from 'react'
import { AnswerDataContext } from '../App';
import styled from "styled-components";
import { Link } from 'react-router-dom';


    const Container = styled.div`
        padding: 10px;
        background-color:whitesmoke;
        display : flex;
        flex-direction : column;
        align-items : center;

`

    const ContainerButton = styled.div`
`

    const QuestionView = styled.div`
        height: 150px;
        width: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        background:#F5F5F5;
        border-radius: 10px;
    `


    const AnswerButton = styled.button`
        height: 2.25rem;
        font-size: 1rem;
        border-radius: 10px;
        margin-left: 10px;
        background: white;
    `



const questionList = [
        ["나이가 어떻게 되시나요?"],
        ["오늘 기분은 어떤가요?"],
        ["오늘 땡기는 종류는 무엇인가요?"],
        ["1인분 예산을 알려주세요."]        
]
const answerList1 = [
    { young: "10~20대", middle: "30대~40대", old: "50대 이상" }
    // { good: "좋음", soso: "그저 그럼", bad: "나쁨" },
    // { meat: "육류", seafood: "해산물", etc: "그외" },
    // { cheap: "만원 이하", middle: "만원~3만원", expensive: "3만원 이상" }
]

// const answerKey = Object.keys({ young: "10~20대", middle: "30대~40대", old: "50대 이상" });
// const answerValue = Object.values({ young: "10~20대", middle: "30대~40대", old: "50대 이상" });
// const test = Object.entries({ young: "10~20대", middle: "30대~40대", old: "50대 이상" })
// console.log(answerKey)
// console.log('---------------------------------')
// console.log(answerValue)
// console.log('---------------------------------')
// console.log(test)
const Question = () => {

    const [question, setQuestion] = useState("나이가 어떻게 되시나요?")
    const [answer, setAnswer] = useState({ young: "10~20대", middle: "30대~40대", old: "50대 이상" })
    const { answerData, setAnswerData } = useContext(AnswerDataContext)
    const answerBtn = Object.entries(answer).map((el) => el[1] ? <AnswerButton value={el[0]}>{el[1]}</AnswerButton> : false
    )
 
 // const answerBtn = answer.map((el, idx) =>
    //     el.length > 4 ?
    //     <AnswerButton value={el} idx={idx} key={`button ${idx}`}>{el}</AnswerButton> :
    //         <Link to='/Result'><AnswerButton value={el} idx={idx} key={`button ${idx}`}>{el}</AnswerButton></Link>
    // )
    const onClick2 = (e) => {
        setAnswerData([...answerData, e.target.value])
        console.log(answerData)
    }
    const onClickAnswer = (e) => {
        // 코드 리팩토링 에정
        if (question === questionList[0][0]) {
            setAnswerData([...answerData,e.target.value])
            setQuestion("오늘 기분은 어떤가요?")
            setAnswer({good:"좋음",soso :"그저 그럼", bad:"나쁨"})
        } else if (question === questionList[1][0]) {
            setAnswerData([...answerData,e.target.value])
            setQuestion("오늘 땡기는 종류는 무엇인가요?")
            setAnswer( {meat:"육류", seafood:"해산물", etc:"그외"})
        } else if (question === questionList[2][0]) {
            setAnswerData([...answerData,e.target.value])
            setQuestion("1인분 예산을 알려주세요.")
            setAnswer( { cheap: "만원 이하", middle: "만원~3만원", expensive: "3만원 이상" })
        }else {}

    }


    return (<Container>
        <QuestionView>{question}</QuestionView>
        <from>

        <ContainerButton onClick={onClick2}>{answerBtn}</ContainerButton>
        {answerData.length >5?<AnswerButton onClick={onClickAnswer}></AnswerButton>:<Link to='/Result'><AnswerButton onClick={onClickAnswer}>!!</AnswerButton></Link>}
        {/* // <AnswerButton onClick={onClickAnswer}>!!</AnswerButton> */}
        </from>
    </Container>
    )
}

export default Question;