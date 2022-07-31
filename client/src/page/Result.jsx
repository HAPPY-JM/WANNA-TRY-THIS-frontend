import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnswerDataContext } from '../App';
import { useQuery } from 'react-query';
import axios from 'axios';
import styled from 'styled-components';
import SNS from '../components/SNS';
import Footer from '../components/Footer';
import { useCookies } from 'react-cookie';
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
  color: #707070;
  font-size: 1.5rem;
  margin-top: 2rem;
`;

const SNSBox = styled.div`
  grid-area: SNS;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
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
  width: 21rem;
  height: 4.5rem;
  background-color: #fde6e6;
  border-radius: 5rem;
  border: 1rem solid #fff;
  justify-content: center;
  align-items: center;
  font-family: 'NEXONLv1GothicBold';
  font-size: 1.5rem;
`;

const Result = () => {
  const { answerData } = useContext(AnswerDataContext);
  const [cookies] = useCookies(['jwtToken']);
  const token = cookies.jwtToken;
  const onClickFood = async (foodId) => {
    const addFood = {
      addFoodId: foodId,
    };
    return await fetch('http://kdt-sw2-busan-team05.elicecoding.com:5002/api/user/food/', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(addFood),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(() => alert('정상적으로 통계에 반영되었습니다.'));
  };
  const { data, isLoading, isError, error } = useQuery(
    'super-name',
    () => {
      return axios.get(
        `http://kdt-sw2-busan-team05.elicecoding.com:5002/api/food/result?mood=${answerData.mood}&age=${answerData.age}&money=${answerData.money}&ingredient=${answerData.ingredient}`,
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
  console.log(data.data[randomNum]._id);
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
          <Link to="/">
            <BtnCollection
              onClick={() => {
                onClickFood(data.data[randomNum]._id);
              }}
            >
              이 메뉴로 결정하기
            </BtnCollection>
          </Link>
          <Link to="/Survey">
            <BtnCollection>메뉴 선택 다시하기</BtnCollection>
          </Link>

          <SNS />
        </SNSBox>
      </Container>
      <Footer />
    </>
  );
};

export default Result;
