import React, { useState, useContext, useEffect, useRef } from 'react';
import { AnswerDataContext } from '../App';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

const transitonName = `out-change`;

const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerButton = styled.div``;

const QuestionView = styled.div`
  height: 150px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  background: #f5f5f5;
  border-radius: 10px;
`;

const AnswerButton = styled.button.attrs({classNames : "fade"})`
  height: 2.25rem;
  font-size: 1rem;
  border-radius: 10px;
  margin-left: 10px;
  background: white;
  /* &fade-enter{
    opacity: 0;
     transform: translateX(-100%);
  }
  &fade-exit{
    opacity: 1;
     transform: translateX(0%);
  }
  &fade-enter-active{
    opacity: 1;
    transform: translateX(0%);
  }
  &fade-exit-active{
    opacity: 0;
    transform: translateX(100%);
  }
  &fade-enter-active{

  }
  &fade-exit-active{
    transition: opacity 500ms
     transform 500ms;
  } */
`;

const question_list = [
  ['나이가 어떻게 되시나요?'],
  ['오늘 기분은 어떤가요?'],
  ['오늘 땡기는 종류는 무엇인가요?'],
  ['1인분 예산을 알려주세요.'],
];

const Question = () => {
  const [question, setQuestion] = useState('나이가 어떻게 되시나요?');
  const [answer, setAnswer] = useState([
    ['young', '10~20대', 'age'],
    ['middle', '30대~40대', 'age'],
    ['old', '50대 이상', 'age'],
  ]);

  const { setAnswerData } = useContext(AnswerDataContext);

  const onClickSubmit = (e) => {
    const { name, value } = e.target;
    // 코드 리팩토링 에정
    if (question === question_list[0][0]) {
      setAnswerData((el) => {
        let data = { ...el };
        data[name] = value;
        return data;
      });
      setQuestion(question_list[1][0]);
      setAnswer([
        ['good', '좋음', 'mood'],
        ['soso', '그저 그럼', 'mood'],
        ['bad', '나쁨', 'mood'],
      ]);
    } else if (question === question_list[1][0]) {
      setAnswerData((el) => {
        let data = { ...el };
        data[name] = value;
        return data;
      });
      setQuestion(question_list[2][0]);
      setAnswer([
        ['meat', '육류', 'ingredient'],
        ['seafood', '해산물', 'ingredient'],
        ['etc', '그외', 'ingredient'],
      ]);
    } else if (question === question_list[2][0]) {
      setAnswerData((el) => {
        let data = { ...el };
        data[name] = value;
        return data;
      });
      setQuestion(question_list[3][0]);
      setAnswer([
        ['cheap', '만원 이하', 'money'],
        ['middle', '만원~3만원', 'money'],
        ['expensive', '3만원 이상', 'money'],
      ]);
    } else if (question === question_list[3][0]) {
      setAnswerData((el) => {
        let data = { ...el };
        data[name] = value;
        return data;
      });
    }
  };

  const onClickBack = () => {
    if (question === question_list[1][0]) {
      setQuestion('나이가 어떻게 되시나요?');
      setAnswer([
        ['young', '10~20대', 'age'],
        ['middle', '30대~40대', 'age'],
        ['old', '50대 이상', 'age'],
      ]);
    } else if (question === question_list[2][0]) {
      setQuestion('오늘 기분은 어떤가요?');
      setAnswer([
        ['good', '좋음', 'mood'],
        ['soso', '그저 그럼', 'mood'],
        ['bad', '나쁨', 'mood'],
      ]);
    } else if (question === question_list[3][0]) {
      setQuestion('오늘 땡기는 종류는 무엇인가요?');
      setAnswer([
        ['meat', '육류', 'ingredient'],
        ['seafood', '해산물', 'ingredient'],
        ['etc', '그외', 'ingredient'],
      ]);
    }
  };
  console.log(answer);
  const backButn =
    question !== '나이가 어떻게 되시나요?' ? (
      <button onClick={onClickBack}>뒤로가기</button>
    ) : null;
  const answerBtn = answer.map((el, idx) =>
    question !== '1인분 예산을 알려주세요.' ? (
      // <SwitchTransition mode="out-in">
      //   <CSSTransition
      //     timeout={1000}
      //     addEndListener={(node, done) => {
      //       node.addEventListener('click', done, false);
      //     }}
      //   >
          <AnswerButton
            onClick={onClickSubmit}
            key={`answer+${idx}`}
            value={el[0]}
            name={el[2]}
          >
            {el[1]}
          </AnswerButton>
      //   </CSSTransition>
      // </SwitchTransition>
    ) : (
      <Link to="/Result">
        <SwitchTransition>
            <CSSTransition
              timeout={100}
            addEndListener={(node, done) => {
              node.addEventListener('click', done, false);
            }}
          >
            <AnswerButton
              onClick={onClickSubmit}
              key={`answer+${idx}`}
              value={el[0]}
              name={el[2]}
            >
              {el[1]}
            </AnswerButton>
          </CSSTransition>
        </SwitchTransition>
      </Link>
    ),
  );

  return (
    <Container>
      <QuestionView>{question}</QuestionView>
      {backButn}
      {answerBtn}
    </Container>
  );
};

export default Question;
