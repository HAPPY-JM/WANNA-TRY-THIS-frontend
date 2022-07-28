import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import { useQuery } from 'react-query';
import axios from 'axios';
// import axios from 'axios';

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MyPage = () => {
  const { data, isError, error } = useQuery(
    'userID',
    async () => {
      const response = await axios.get(
        'http://localhost:5000/api/user/62de7d5a09eb4d48365617c9',
      );
      const resData = response.data;
      return resData;
      // console.log(data.map((todo)=>todo.data))
    },
    {
      onSuccess: (data) => {
        return data;
      },
      onError: (e) => {
        console.log(e.message);
      },
      // select: (data) => {
      //  const foodMostRecommandedFood = data.data.mostRecommandedFood
      // return foodMostRecommandedFood
      // }
    },
  );
  //통계 데이터
  console.log(data);

  return (
    <Container>
      <Header />
      <div id="aa">{/* {data.mostRecommandedFood} */}</div>
    </Container>
  );
};

export default MyPage;
