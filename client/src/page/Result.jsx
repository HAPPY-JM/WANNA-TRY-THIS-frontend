import React, { useContext } from 'react';
import { AnswerDataContext } from '../App';
import { useQuery } from 'react-query';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  height: 100vh;
  position: fixed;
`;

const ResultBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ResultText = styled.div`
  display: flex;
  flex-direction: column;
  height: 6rem;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const FoodImg = styled.img`
  width: 300px;
  height: 300px;
  margin-bottom: 2rem;
  border-radius: 1.5rem;
`;

const SNSIcon = styled.img`
  width: 3rem;
  height: 3rem;
`;

const SNSBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 10rem;
  height: 5rem;
  background: #e8e8e8;
  border-radius: 1.5rem;
`;

const SNSBox = () => {
  return (
    <SNSBoxContainer>
      <SNSIcon src="../icon/icon-link.png" />
      <SNSIcon src="../icon/icon-kakaotalk.png" />
      <SNSIcon src="../icon/icon-twitter.png" />
    </SNSBoxContainer>
  );
};

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
      </Container>
      <SNSBox />
    </>
  );
};

export default Result;
