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

  const BackBtn = styled.div`
    cursor: pointer;
    padding: 2rem;
  `;

const obj = [
  {
    question: '나이를 알려주세요.',
    answerType: 'age',
    answer: [
      {
        value: 'young',
        text: '20대 이하',
      },
      {
        value: 'middle',
        text: '30대~40대',
      },
      {
        value: 'old',
        text: '50대 이상',
      }
    ]
  },
    {
    question: '오늘 기분은 어떤가요?',
    answerType: 'mood',
    answer: [
      {
        value: 'good',
        text: '좋음',
      },
      {
        value: 'soso',
        text: '그저 그럼',
      },
      {
        value: 'bad',
        text: '나쁨',
      }
    ]
  },
    {
    question: '오늘 땡기는 종류는 무엇인가요',
    answerType: 'ingredient',
    answer: [
      {
        value: 'meat',
        text: '육류',
      },
      {
        value: 'sea',
        text: '해산물',
      },
      {
        value: 'etc',
        text: '비건',
      }
    ]
  },
        {
    question: '1인분 예산은 어느 정도 인가요?',
    answerType: 'money',
    answer: [
      {
        value: 'meacheapt',
        text: '만원 이하',
      },
      {
        value: 'middle',
        text: '만원~3만원',
      },
      {
        value: 'any',
        text: '상관없음',
      }
    ]
  },
]

const Question = () => {


  const [answers, setAnswers] = useState(obj[0])
  console.log(answers)
  const {setAnswerData, barcount, setBarcount } =
    useContext(AnswerDataContext);
  
  const onClickSubmit = (e) => {
    const { name, value } = e.target;
    if (answers.question === obj[0].question) {
      setAnswerData((answers) => {
        let data = { ...answers };
        data[name] = value;
        return data;
      });
      setBarcount(barcount + 1);
      setAnswers(obj[1]);
    } else if (answers.question === obj[1].question) {
      setAnswerData((answers) => {
        let data = { ...answers };
        data[name] = value;

        return data;
      });
      setBarcount(barcount + 1);
      setAnswers(obj[2]);
    } else if (answers.question === obj[2].question) {
      setAnswerData((answers) => {
        let data = { ...answers };
        data[name] = value;
        return data;
      });
      setBarcount(barcount + 1);
      setAnswers(obj[3]);
    } else if (answers.question === obj[3].question) {
      setAnswerData((answers) => {
        let data = { ...answers };
        data[name] = value;
        return data;
      });
      setBarcount(barcount + 1);
    }
  };

  const onClickBack = () => {
    if (answers.question === obj[1].question) {
      setAnswers(obj[0])
      setBarcount(barcount - 1);
    } else if (answers.question === obj[2].question) {
      setAnswers(obj[1])
      setBarcount(barcount - 1);
    } else if (answers.question === obj[3].question) {
      setAnswers(obj[2])
      setBarcount(barcount - 1);
    }
  };


  const backBtn =
    answers.question !== '나이를 알려주세요.' ? (
      <BackBtn onClick={onClickBack}>
        <img src="../button-back.png" alt="뒤로가기" width={32} />
      </BackBtn>
    ) : (
      null
    );
  
  const answerBtn =answers.answer &&answers.answer.map((answer, idx) =>
    answers.question !== obj[3].question ? (
      <AnswerButton
        whileHover={{ scale: 1.2 }}
        whileTap={{ borderRadius: '50%' }}
        onClick={onClickSubmit}
        key={`answer+${idx}`}
        value={answer.value}
        name={answers.answerType}
      >
        {answer.text}
      </AnswerButton>
    ) : (
      <Link to="/Result">
        <AnswerButton
          whileHover={{ scale: 1.2 }}
          whileTap={{ borderRadius: '50%' }}
          onClick={onClickSubmit}
          key={`answers+${idx}`}
          value={answer.value}
          name={answers.answerType}
        >
          {answer.text}
        </AnswerButton>
      </Link>
    ),
  );

  return (
    <Container>
      <QuestionView>
        {backBtn}
        {answers.question} 
      </QuestionView>
      <AnswerContainer>{ answerBtn}</AnswerContainer>
    </Container>
  );
};

export default Question;
