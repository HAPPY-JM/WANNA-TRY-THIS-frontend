import React, { useContext } from 'react';
import { AnswerDataContext } from '../App';
import { useQuery } from 'react-query';
import axios from 'axios';
import styled from 'styled-components';
import SNS from '../components/SNS';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
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

const Name = styled.div`
  font-family: 'NEXONLv1GothicBold';
  font-size: 2rem;
  margin-bottom: 0.5rem;
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
  width: 10rem;
  height: 5rem;
  background-color: #fde6e6;
  border-radius: 1.5rem;
  border: 1rem solid #fff;
  justify-content: center;
  align-items: center;
`;

const DecisionBtn = styled.div`
  display: flex;
`;

const DataGet = () => {
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

  localStorage.setItem('foodResult', JSON.stringify(data.data));

  return;
};

const randomPick = (foodsData) => {
  return Math.floor(Math.random() * foodsData.length);
  // localStorage.setItem('randomNum', randomNum);
  // const localRandomNum = localStorage.getItem('randomNum');
};

const Result = () => {
  const dataGet = DataGet();
  const [cookies] = useCookies(['jwtToken']);
  const token = cookies.jwtToken;

  // localStorage.setItem('foodResult', JSON.stringify(data.data));
  const foodsData = JSON.parse(localStorage.getItem('foodResult'));

  console.log('음식', foodsData);

  const randomNum = randomPick(foodsData);

  const addFoodId = {
    addFoodId: foodsData[randomNum]._id,
  };

  return (
    <>
      <Container>
        <ResultBox>
          {
            <div>
              <FoodImg src={foodsData[randomNum].img} />
              <ResultText>
                <Name key={foodsData[randomNum].name}>
                  {foodsData[randomNum].name}
                </Name>
                <span key={foodsData[randomNum].comment}>
                  {foodsData[randomNum].comment}
                </span>
              </ResultText>
            </div>
          }
        </ResultBox>
        <SNSBox>
          <BtnCollection
            onClick={async () => {
              const res = await fetch('http://localhost:5000/api/user/food', {
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(addFoodId),
              });
              return res.json();
            }}
          >
            이 메뉴로 결정하기
          </BtnCollection>
          <BtnCollection onClick={Result}>나의 메뉴 랜덤뽑기</BtnCollection>
          <BtnCollection
            onClick={() => {
              <Link to="/Survey" />;
            }}
          >
            메뉴 선택 다시하기
          </BtnCollection>
          <SNS />
        </SNSBox>
      </Container>
      <Footer />
    </>
  );
};

export default Result;
