import React, { useContext } from 'react';
import { AnswerDataContext } from '../App';
import { useQuery } from 'react-query';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  padding: 10px;
  background-color: whitesmoke;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Title = styled.h1`
  text-align: center;
`;
const FoodImg = styled.img`
  width: 300px;
  height: 150px;
`;
const Button = styled.button`
  text-align: center;
  height: 2.25rem;
  font-size: 1rem;
  border-radius: 10px;
  margin-left: 10px;
  margin-bottom: 30px;
  margin-top: 30px;
  background: white;
  display: flex;
  background-color: #f08080;
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
    <>
      <Title>이거머글랭?</Title>
      <Container>
        {data?.data.map((food) => (
          <div>
            <FoodImg src="https://kfcapi.inicis.com/kfcs_api_img/KFCS/goods/DL_2175525_20220630163907792.png" />
            <div key={food.name}>{food.name}</div>
            <span key={food.comment}>{food.comment}</span>
          </div>
        ))}
      </Container>
    </>
  );
};

export default Result;
