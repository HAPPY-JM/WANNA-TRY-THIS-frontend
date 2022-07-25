import React, { useState, useContext, useEffect } from 'react';
import { AnswerDataContext } from '../App';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerButton = styled.div`
  width: 4rem;
  height: 3rem;
  font-size: 2rem;
`;

const QuestionView = styled.div`
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: #484848;
  border-radius: 10px;
`;

const AnswerButton = styled.button`
  width: 10rem;
  height: 6rem;
  font-size: 1.5rem;
  text-align: center;
  border: none;
  border-radius: 2rem;
  background: white;
  margin: 0.5rem;
`;
const questionList = [
  ['나이를 알려주세요.'],
  ['오늘 기분은 어떤가요?'],
  ['오늘 땡기는 종류는 무엇인가요?'],
  ['1인분 예산은 어느 정도 인가요?'],
];

const Question = () => {
  const [question, setQuestion] = useState('나이를 알려주세요.');
  const [answer, setAnswer] = useState([
    ['young', '20대 이하', 'age'],
    ['middle', '30대~40대', 'age'],
    ['old', '50대 이상', 'age'],
  ]);
  const { setAnswerData } = useContext(AnswerDataContext);

  const onClickSubmit = (e) => {
    const { name, value } = e.target;
    // 코드 리팩토링 에정
    if (question === questionList[0][0]) {
      setAnswerData((el) => {
        let data = { ...el };
        data[name] = value;
        return data;
      });
      setQuestion('오늘 기분은 어떤가요?');
      setAnswer([
        ['good', '좋음', 'mood'],
        ['soso', '그저 그럼', 'mood'],
        ['bad', '나쁨', 'mood'],
      ]);
    } else if (question === questionList[1][0]) {
      setAnswerData((el) => {
        let data = { ...el };
        data[name] = value;
        return data;
      });
      setQuestion('오늘 땡기는 종류는 무엇인가요?');
      setAnswer([
        ['meat', '육류', 'ingredient'],
        ['seafood', '해산물', 'ingredient'],
        ['etc', '비건', 'ingredient'],
      ]);
    } else if (question === questionList[2][0]) {
      setAnswerData((el) => {
        let data = { ...el };
        data[name] = value;
        return data;
      });
      setQuestion('1인분 예산은 어느 정도 인가요?');
      setAnswer([
        ['cheap', '만원 이하', 'money'],
        ['middle', '만원~3만원', 'money'],
        ['any', '상관없음', 'money'],
      ]);
    } else if (question === questionList[3][0]) {
      setAnswerData((el) => {
        let data = { ...el };
        data[name] = value;
        return data;
      });
    }
  };

  const onClickBack = () => {
    if (question === questionList[1][0]) {
      setQuestion('나이를 알려주세요.');
      setAnswer([
        ['young', '10~20대', 'age'],
        ['middle', '30대~40대', 'age'],
        ['old', '50대 이상', 'age'],
      ]);
    } else if (question === questionList[2][0]) {
      setQuestion('오늘 기분은 어떤가요?');
      setAnswer([
        ['good', '좋음', 'mood'],
        ['soso', '그저 그럼', 'mood'],
        ['bad', '나쁨', 'mood'],
      ]);
    } else if (question === questionList[3][0]) {
      setQuestion('오늘 땡기는 종류는 무엇인가요?');
      setAnswer([
        ['meat', '육류', 'ingredient'],
        ['seafood', '해산물', 'ingredient'],
        ['etc', '그외', 'ingredient'],
      ]);
    }
  };
  console.log(answer);

  const backBtn =
    question !== '나이를 알려주세요.' ? (
      <button onClick={onClickBack}>뒤로가기</button>
    ) : (
      false
    );

  const answerBtn = answer.map((el, idx) =>
    question !== '1인분 예산은 어느 정도 인가요?' ? (
      <AnswerButton
        onClick={onClickSubmit}
        key={`answer+${idx}`}
        value={el[0]}
        name={el[2]}
      >
        {el[1]}
      </AnswerButton>
    ) : (
      <Link to="/Result">
        <AnswerButton
          onClick={onClickSubmit}
          key={`answer+${idx}`}
          value={el[0]}
          name={el[2]}
        >
          {el[1]}
        </AnswerButton>
      </Link>
    ),
  );

  return (
    <Container>
      <QuestionView>{question}</QuestionView>
      {backBtn}
      {answerBtn}
    </Container>
  );
};

export default Question;
