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
  console.log(answerData);
  const { data, isLoading, isError, error } = useQuery('super-name', () => {
    return axios.get('http://localhost:5000/api/food');
  });
  if (isLoading) {
    return <h1>로딩중</h1>;
  }
  if (isError) {
    return <h1>{error}</h1>;
  }
  console.log(answerData);

  return (
    <Container>
      {data?.data.map((food) => (
        <div>
          <FoodImg src="https://kfcapi.inicis.com/kfcs_api_img/KFCS/goods/DL_2175525_20220630163907792.png" />
          <div key={food.name}>{food.name}</div>
          <span key={food.comment}>{food.comment}</span>
        </div>
      ))}
    </Container>
  );
};

export default Result;
