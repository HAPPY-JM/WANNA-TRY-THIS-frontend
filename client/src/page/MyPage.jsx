import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import {useQuery} from 'react-query';
import axios from 'axios';

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Mypage = () => {

  const { data, isError, error } = useQuery(
    "userID",
    () => {
      return fetch("http://localhost:5000/api/user/62de7af7cbd9da7f4a0feab2")
    },
    {
      onSuccess: (data) => {
        console.log(data)
      },
      onError: (e) => {
        console.log(e.message)
      },
    }
  )
console.log(data)

  return (
    <Container>
      <Header />
      
    </Container>
  );
};

export default Mypage;
