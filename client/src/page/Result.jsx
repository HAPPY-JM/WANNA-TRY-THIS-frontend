import React, { useContext } from 'react';
import { AnswerDataContext } from '../App';
import { useQuery } from 'react-query';
import axios from 'axios';
import styled from 'styled-components';
import SNS from '../components/SNS';

const Container = styled.div`
  display: grid;
  position: fixed;
  grid-template-columns: (2 1fr);
  grid-template-areas: 'ResultBox SNS';
  width: 100%;
  height: 100vh;
`;

const ResultBox = styled.div`
  grid-area: ResultBox;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.5rem;
`;

const SNSBox = styled.div`
  grid-area: SNS;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ResultText = styled.div`
  display: flex;
  flex-direction: column;
  height: 6rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  white-space: pre-wrap;
`;

const FoodImg = styled.img`
  width: 300px;
  height: 300px;
  margin-bottom: 2rem;
  border-radius: 1.5rem;
`;

const BtnCollection = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  height: 20rem;
  background-color: aliceblue;
  border-radius: 1.5rem;
  border: 1rem solid #fff;
`;

const DecisionBtn = styled.div`
  display: flex;
`;

const Result = () => {
  const { answerData } = useContext(AnswerDataContext);
  const { data, isLoading, isError, error } = useQuery(
    'super-name',
    () => {
      return axios.get(
        `http://localhost:5000/api/food/result?mood=${answerData.mood}&age=${answerData.age}&money=${answerData.money}&ingredient=${answerData.ingredient}`,
      );
    },
    { staleTime: Infinity },
  );
  if (isLoading) {
    return <h1>로딩중</h1>;
  }
  if (isError) {
    return <h1>{error}</h1>;
  }

  const randomNum = Math.floor(Math.random() * data.data.length);

  return (
    <>
      <Container>
        <ResultBox>
          {
            <div>
              <FoodImg src={data.data[randomNum].img} />
              <ResultText>
                <div key={data.data[randomNum].name}>
                  {data.data[randomNum].name}
                </div>
                <span key={data.data[randomNum].comment}>
                  {data.data[randomNum].comment}
                </span>
              </ResultText>
            </div>
          }
        </ResultBox>
        <SNSBox>
          <SNS />
        </SNSBox>
      </Container>
    </>
  );
};

export default Result;
