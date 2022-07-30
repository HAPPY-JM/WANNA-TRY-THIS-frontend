import React, { useState, useContext } from 'react';
import { AnswerDataContext } from '../App';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const QuestionView = styled.div`
  display: flex;
  height: 150px;
  padding-top: 5rem;
  padding-bottom: 4rem;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: #484848;
  border-radius: 10px;
`;

const AnswerButton = styled(motion.button)`
  width: 10rem;
  height: 6rem;
  font-size: 1.5rem;
  text-align: center;
  border: none;
  border-radius: 2rem;
  background: white;
  margin: 0.5rem;
  &:hover,
  :focus {
    background: whitesmoke;
  }
`;

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: row;
`;


// 아래 객채 형태 state 사용을 줄이는 방향으로 리팩토링 예정
// const obj = [
//   {
//     question: '질문1',
//     answerType: 'age',
//     answer: [
//       {
//         value: 'young',
//         text: '20대 이하',
//       },
//       {
//         value: 'middle',
//         text: '30대~40대',
//       },
//     ]
//   },



const question_list = [
  ['나이를 알려주세요.'],
  ['오늘 기분은 어떤가요?'],
  ['오늘 땡기는 종류는 무엇인가요?'],
  ['1인분 예산은 어느 정도 인가요?'],
];

const answer_list = [
  [
    ['young', '20대 이하', 'age'],
    ['middle', '30대~40대', 'age'],
    ['old', '50대 이상', 'age'],
  ],
  [
    ['good', '좋음', 'mood'],
    ['soso', '그저 그럼', 'mood'],
    ['bad', '나쁨', 'mood'],
  ],
  [
    ['meat', '육류', 'ingredient'],
    ['sea', '해산물', 'ingredient'],
    ['etc', '비건', 'ingredient'],
  ],
  [
    ['cheap', '만원 이하', 'money'],
    ['middle', '만원~3만원', 'money'],
    ['any', '상관없음', 'money'],
  ],
];

const Question = () => {
  const [question, setQuestion] = useState(question_list[0][0]);
  const [answers, setAnswer] = useState(answer_list[0]);
  const { setAnswerData, barcount, setBarcount } =
    useContext(AnswerDataContext);

  const onClickSubmit = (e) => {
    const { name, value } = e.target;
    if (question === question_list[0][0]) {
      setAnswerData((answers) => {
        let data = { ...answers };
        data[name] = value;
        return data;
      });
      setBarcount(barcount + 1);
      setQuestion(question_list[1][0]);
      setAnswer(answer_list[1]);
    } else if (question === question_list[1][0]) {
      setAnswerData((answers) => {
        let data = { ...answers };
        data[name] = value;
        return data;
      });
      setBarcount(barcount + 1);
      setQuestion(question_list[2][0]);
      setAnswer(answer_list[2]);
    } else if (question === question_list[2][0]) {
      setAnswerData((answers) => {
        let data = { ...answers };
        data[name] = value;
        return data;
      });
      setBarcount(barcount + 1);
      setQuestion(question_list[3][0]);
      setAnswer(answer_list[3]);
    } else if (question === question_list[3][0]) {
      setAnswerData((answers) => {
        let data = { ...answers };
        data[name] = value;
        return data;
      });
      setBarcount(barcount + 1);
    }
  };

  const onClickBack = () => {
    if (question === question_list[1][0]) {
      setQuestion(question_list[0][0]);
      setAnswer(answer_list[0]);
      setBarcount(barcount - 1);
    } else if (question === question_list[2][0]) {
      setQuestion(question_list[1][0]);
      setAnswer(answer_list[1]);
      setBarcount(barcount - 1);
    } else if (question === question_list[3][0]) {
      setQuestion(question_list[2][0]);
      setAnswer(answer_list[2]);
      setBarcount(barcount - 1);
    }
  };

  const BackBtn = styled.div`
    cursor: pointer;
    padding: 2rem;
  `;

  const backBtn =
    question !== '나이를 알려주세요.' ? (
      <BackBtn onClick={onClickBack}>
        <img src="../button-back.png" alt="뒤로가기" width={32} />
      </BackBtn>
    ) : (
      false
    );

  const answerBtn = answers.map((answer, idx) =>
    question !== '1인분 예산은 어느 정도 인가요?' ? (
      <AnswerButton
        whileHover={{ scale: 1.2 }}
        whileTap={{ borderRadius: '50%' }}
        onClick={onClickSubmit}
        key={`answer+${idx}`}
        value={answer[0]}
        name={answer[2]}
      >
        {answer[1]}
      </AnswerButton>
    ) : (
      <Link to="/Result">
        <AnswerButton
          whileHover={{ scale: 1.2 }}
          whileTap={{ borderRadius: '50%' }}
          onClick={onClickSubmit}
          key={`answer+${idx}`}
          value={answer[0]}
          name={answer[2]}
        >
          {answer[1]}
        </AnswerButton>
      </Link>
    ),
  );

  return (
    <Container>
      <QuestionView>
        {backBtn}
        {question}
      </QuestionView>
      <AnswerContainer>{answerBtn}</AnswerContainer>
    </Container>
  );
};

export default Question;
