import React, { useContext } from 'react';
import { AnswerDataContext } from '../App';
import { useQuery } from 'react-query';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: fixed;
  align-items: center;
`;

const FoodImg = styled.img`
  width: 300px;
  height: 150px;
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
    <Container>
      {
        <div>
          <FoodImg src={data.data[randomNum].img} />
          <div key={data.data[randomNum].name}>{data.data[randomNum].name}</div>
          <span key={data.data[randomNum].comment}>
            {data.data[randomNum].comment}
          </span>
        </div>
      }
    </Container>
  );
};

export default Result;
