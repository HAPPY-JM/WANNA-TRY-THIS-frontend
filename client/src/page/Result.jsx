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

  // localhost: 5000 / api / food / result ? mood = (good / soso / bad) & age=(young / middle / old) & money=(cheap / middle / any) & ingredient=(meat / sea / etc)
  // ?mood=soso&age=middle&money=middle&ingredient=sea

  const answerUrl = Object.entries(answerData);
  const url = `?${answerUrl[0][0]}=${answerUrl[0][1]}&${answerUrl[1][0]}=${answerUrl[1][1]}&${answerUrl[2][0]}=${answerUrl[2][1]}&${answerUrl[3][0]}=${answerUrl[3][1]}`;
  console.log(url);

  const { data, isLoading, isError, error } = useQuery(
    'food',
    () => {
      return axios.get(`http://localhost:5000/api/food/result${url}`);
    },
    {
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (e) => {
        console.log(e.message);
      },
    },
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
