import React, { useState, useContext, useEffect } from 'react';
import { AnswerDataContext } from '../App';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  padding: 10px;
  background-color: whitesmoke;
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

const Abutton = styled.button`
  height: 2.25rem;
  font-size: 1rem;
  border-radius: 10px;
  margin-left: 10px;
  background: white;
`;

const questionList = [
  ['나이가 어떻게 되시나요?'],
  ['오늘 기분은 어떤가요?'],
  ['오늘 땡기는 종류는 무엇인가요?'],
  ['1인분 예산을 알려주세요.'],
];
const answerList1 = [
  ['10~20대', '30대~40대', '50대 이상'],
  ['좋음', '그저 그럼', '나쁨'],
  ['육류', '해산물', '그외'],
  ['만원 이하', '만원~3만원', '3만원 이상'],
];

const Question = () => {
  const [question, setQuestion] = useState('나이가 어떻게 되시나요?');
  const [answer, setAnswer] = useState(['10~20대', '30대~40대', '50대 이상']);
  const { answerData, setAnswerData } = useContext(AnswerDataContext);
  const answerBtn = answer.map((el, idx) =>
    el.length > 4 ? (
      <Abutton value={el} idx={idx} key={`button ${idx}`}>
        {el}
      </Abutton>
    ) : (
      <Link to="/Result">
        <Abutton value={el} idx={idx} key={`button ${idx}`}>
          {el}
        </Abutton>
      </Link>
    ),
  );
  const onClickAnswer = (e) => {
    // 코드 리팩토링 에정
    if (question === questionList[0][0]) {
      setAnswerData([...answerData, e.target.value]);
      setQuestion('오늘 기분은 어떤가요?');
      setAnswer(['좋음', '그저 그럼', '나쁨']);
    } else if (question === questionList[1][0]) {
      setAnswerData([...answerData, e.target.value]);
      setQuestion('오늘 땡기는 종류는 무엇인가요?');
      setAnswer(['육류', '해산물', '그외']);
    } else if (question === questionList[2][0]) {
      setAnswerData([...answerData, e.target.value]);
      setQuestion('1인분 예산을 알려주세요.');
      setAnswer(['만원 이하', '만원~3만원', '3만원 이상']);
    } else {
    }
  };
  console.log(answerData);

  return (
    <Container>
      <QuestionView>{question}</QuestionView>
      <ContainerButton onClick={onClickAnswer}>{answerBtn}</ContainerButton>
    </Container>
  );
};

export default Question;
